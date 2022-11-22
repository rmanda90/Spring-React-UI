import React, { Component } from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { elementType } from 'react-prop-types';

/**
 * Renders an <input> or other specified component and is defaulted with Bootstrap styling.
 */
class FormControl extends Component {
	render() {
		if (!this.props) {
			return null;
		}

		const {
			componentClass: Component,
			type,
			id,
			className,
			inError,
			placeholder,
			componentRef: ref,
			isRequired,
			...props
		} = this.props;

		return (
			<Component
				{...props}
				type={type}
				id={id}
				required={isRequired}
				className={classnames(className, { 'is-invalid': inError })}
				placeholder={placeholder}
				ref={ref}
				aria-label={props.label}
				aria-required={props.isRequired}
			/>
		);
	}
}

FormControl.propTypes = {
	componentClass: elementType,
	type: PropTypes.string,
	id: PropTypes.string,
	className: PropTypes.string,
	placeholder: PropTypes.string,
	componentRef: PropTypes.func,
	label: PropTypes.string.isRequired,
	inError: PropTypes.bool,
	isRequired: PropTypes.bool
};

FormControl.defaultProps = {
	componentClass: 'input',
	type: 'text',
	id: null,
	className: 'form-control',
	placeholder: null,
	componentRef: null,
	inError: false,
	isRequired: false
};

export default FormControl;
