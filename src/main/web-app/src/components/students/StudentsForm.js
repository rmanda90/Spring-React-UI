import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form, { FormGroupInputControl } from '../../UI-Components/Form/Form';
import { fetchStudentById, sendStudent } from './student.actions';
import { clearExceptions } from '../../redux/Exceptions/exception.actions';

class StudentsForm extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        this.inputDisplayNames = {
            firstName: 'First Name',
            lastName: 'Last Name',
            emailId: 'Email'
        };

        this.requiredFields = ['First Name', 'Last Name', 'Email'];

        this.state = {
            buttonsDisabled: false,
            isEdit: !!props.studentId,
            studentList: this.props.studentList
        }
    }

    componentDidMount() {
        if (this.props.fetchStudentById && this.state.isEdit) {
            this.props.fetchStudentById(`/students/${this.props.studentId}`);
        }
        this.focusInput();
    }

    componentWillUnmount() {
		this.props.clearExceptions();
	}

    /**
     * Focuses the first enabled input.
     *
     * @param {string[]} [inputs]
     * 		The array of inputs to attempt to focus.
     */
    focusInput(inputs = Object.keys(this.inputDisplayNames)) {
        inputs.some((input) => {
            if (this[input] && !this[input].disabled) {
                this[input].focus();
                return true;
            }
            return false;
        });
    }

    /**
     * Handles changing the value of an input.
     *
     * @param {Event} e
     * 		The input change event.
     */
    handleInputChange = (e) => {
        const { target } = e;
        this.setState((prevState) => ({
            studentList: { ...prevState.studentList, [target.name]: target.value }
        }));
    }

    /**
     * Handles submitting the Srudents form.
     *
     * @param {Event} e
     * 		The form submission event.
     */
    handleSubmit = (e) => {
        e.preventDefault();
        const studentformdata = Object.keys(this.inputDisplayNames).reduce((acc, input) => {
            acc[input] = this.state.studentList[input].trim();
            return acc;
        }, {});

        this.props.send(studentformdata, '/students');

        this.setState((prevState) => ({
            buttonsDisabled: true,
            studentList: { ...prevState.studentList}
        }));
        
        this.props.discard();
    }

    render() {
        const inputArr = Object.keys(this.inputDisplayNames).map((input) => {
            return (
                <FormGroupInputControl
                    control={({
                        id: input,
                        name: input,
                        onChange: this.handleInputChange,
                        value: this.state.studentList[input] || '',
                        componentRef: (ref) => (this[input] = ref)
                    })}
                    placeholder={`Please Enter ${this.inputDisplayNames[input]} of the Student`}
                    key={input}
                    label={this.inputDisplayNames[input]}
                    isRequired={this.requiredFields.includes(this.inputDisplayNames[input]) ? true : false}
                />
            );
        });

        const formProps = {
            buttonsDisabled: this.state.buttonsDisabled,
            legend: `${this.state.isEdit ? 'Edit' : 'Create'} Student`,
            fieldRequiredText: this.requiredFields !== undefined && this.requiredFields.length > 0,
            secondaryButtonLabel: 'Discard',
            onClickDiscard: this.props.discard,
            onSubmit: this.handleSubmit
        };
        return (
            <div>
                <Form {...formProps}>
                    {inputArr}
                </Form>
            </div>
        )
    }
}
StudentsForm.defaultProps = {
    /**
     * The Student List that is in context.
     * This will only be populated when editing
     * a Student List.
     */
    studentList: PropTypes.shape({
        studentId: '', 
        firstName: '', 
        lastName: '', 
        emailId: ''
    }),
    /**
     * The Sending Student ID.  This is used to retrieve
     * the Student and indicates that this form
     * should be used in edit mode.
     */
    studentId: null,
};

StudentsForm.prototypes = {
    /**
     * The Student List that is in context.
     * This will only be populated when editing
     * a Student List.
     */
    studentList: PropTypes.shape({
        studentId: PropTypes.number,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        emailId: PropTypes.string
    }),
    /**
     * The Sending Student ID.  This is used to retrieve
     * the Student and indicates that this form
     * should be used in edit mode.
     */
    studentId: PropTypes.string,
};

/**
 * Maps the current state of the Redux store to a set of
 * properties to be passed to the component.
 * params : Provided from URL from the Router
 * @param {object} state
 */
const mapStateToProps = (state, { match: { params }, location }) => {
    const { student } = state;

    return {
        studentId: params.id,
        studentList: student.data.find(({ studentId }) => studentId === Number(params.id))
    };
};

/**
 * Creates a set of functions that utilize the dispatcher to
 * dispatch actions. These are the Action Creators for the
 * InvitationsForm component.
 *
 * @param {function} dispatch
 * 		The redux dispatcher.
 * @param {object} props
 * 		The props being passed to the component.
 */
const mapDispatchToProps = (dispatch, props) => ({
    clearExceptions: () => { dispatch(clearExceptions); },
    discard: (response) => {
		if (!response || !response.error) {
			dispatch(clearExceptions);
			props.history.push(`/students${props.location.search}`);
		}
	},

    fetchStudentById: (query) => dispatch(fetchStudentById(query)),
    /**
     * Makes the fetch request to send the given Student Data .
     *
     * @param {object} student
     * 		The Studnet Data to be sent to be sent.
     */
    send: (studentformdata, query) => dispatch(sendStudent(null, studentformdata, query))
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentsForm);
