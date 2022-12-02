import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadAllStudents, fetchStudentById, deleteStudent } from './student.actions';
import SortableTable from '../../UI-Components/SortableTable.react';
import LoadingIndicator from '../../UI-Components/LoadingIndicator';
import { withRouter, Link } from 'react-router-dom';
import { clearExceptions } from '../../redux/Exceptions/exception.actions';

// import history from '../../UI-Components/Navigation/history';

class StudentsList extends Component {

  constructor(props) {
    super(props);
    this.getDataById = this.getDataById.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
    this.inputDisplayNames = {
      id: 'Student ID'
    };

    this.state = {
      studentList: this.props.studentList,
      buttonsDisabled: true,
      id: ''
    }
  }

  componentDidMount() {
    console.log("SL : componentDidMount")
    this.props.fetchStudents('/students');
  }

  getDataById = (e) => {
    e.preventDefault();
    const id = this.state.id;
    (id) ? this.props.fetchStudentById(`/students/${id}`) : this.props.fetchStudents('/students');
    this.setState({ id: '' });
  }

  onClickDelete = (id, e) => {
    e.preventDefault();
    this.props.deleteStudent(`/students/${id}`);

    this.setState((prevState) => ({
      buttonsDisabled: !this.state.buttonsDisabled,
      studentList: { ...prevState.studentList }
    }));
    this.relod();
  }

  relod = () => {
    this.props.fetchStudents('/students');
  }

  handleInputChange = (e) => {
    const { target } = e;
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { id } = this.state;

    const rows = this.props.studentList ? this.props.studentList.map((student, i) => ({
      indx: i + 1,
      studentId: student.id,
      displayName: student.firstName + ' ' + student.lastName,
      emailId: student.email,
      actions: (
        <div>
          <button
            id={`delete-${student.id}`}
            className='btn btn-danger'
            title={`Delete ${student.firstName} ${student.lastName}`}
            onClick={(e) => this.onClickDelete(student.id, e)}
            key={`delete-${student.id}`}
          >
            <i className="fa fa-trash" aria-hidden="true"></i>
          </button>
          <Link className="btn btn-primary" id={`edit-${student.id}`} to={`/students/edit/${student.id}`}>
            <i className="fa fa-edit" aria-hidden="true"></i>
          </Link>
        </div>
      )
    })) : [];


    const headers = [
      {
        Header: '#',
        accessor: 'indx'
      },
      {
        Header: 'Stundent Id',
        accessor: 'studentId'
      },
      {
        Header: 'Name',
        accessor: 'displayName'
      },
      {
        Header: 'Email',
        accessor: 'emailId'
      },
      {
        Header: '',
        accessor: 'actions'
      }
    ];

    const tableProps = {
      columns: headers,
      data: rows
    };

    return (
      <div>
        <div className="input-group my-2">
          <button type="button" className="btn btn-outline-primary" onClick={this.props.onCreate}>
            <i className="fa fa-user-plus" aria-hidden="true"></i>
          </button>
          <input type="search" className="form-control rounded" placeholder="Enter Studnet ID to Search"
            aria-label="Search" aria-describedby="search-addon" name="id" value={id}
            onChange={this.handleInputChange} />
          <button type="button" className="btn btn-primary" onClick={this.getDataById}>
            <i className="fa fa-search" aria-hidden="true" />
          </button>
          <button type="button" className="btn btn-outline-success" onClick={this.relod}>
            <i className="fa fa-refresh" aria-hidden="true" />
          </button>
        </div>
        <hr />
        <div>
          {this.props.isFetching ? <LoadingIndicator /> : <SortableTable  {...tableProps} />}
        </div>
      </div >
    )
  }
}

StudentsList.prototypes = {
  studentList: PropTypes.array,
  isFetching: PropTypes.bool.isRequired,
  onCreate: PropTypes.func.isRequired

};

/**
 * Maps the redux store's state to a set of props
 * to be passed to the OperationsList component.
 *
 * @param {object} state
 * 		The current state of the redux store.
 */
const mapStateToProps = (state) => {

  const { student } = state

  return {
    isFetching: student.isFetching,
    studentList: student.data
  }
}

/**
 * Creates a set of functions that utilize the dispatcher to
 * dispatch actions. These are the Action Creators for the
 * OperationsList component.
 *
 * @param {function} dispatch
 * 		The redux dispatcher.
 */
const mapDispatchToProps = (dispatch, props) => ({
  clearExceptions: () => { dispatch(clearExceptions); },
  discard: (response) => {
    if (!response || !response.error) {
      dispatch(clearExceptions);
      props.history.push(`/students${props.location.search}`);
    }
  },

  /**
   * Handler for clicking the create button.
   */
  onCreate: () => props.history.push(`/students/add${props.location.search}`),

  deleteStudent: (query) => dispatch(deleteStudent(query)),
  /**
  * Makes the fetch request for the list of All Students.
  */
  fetchStudents: (query) => dispatch(loadAllStudents(query)),

  /**
  * Makes the fetch request for the Student based on Id.
  */
  fetchStudentById: (query) => dispatch(fetchStudentById(query)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentsList));
