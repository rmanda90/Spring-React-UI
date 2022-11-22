import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '../Button';
import FormControl from '../FormControl';
import EscapeKeyListener from '../EscapeKeyListener';
import './form.scss';

/**
 * Form implementation based on Twitter Bootstrap forms.
 * [http://getbootstrap.com/css/#forms]
 */
const Form = ({ children, ...form }) => {
	const primaryButton = {
		className: 'btn-primary',
		disabled: form.buttonsDisabled,
		label: form.primaryButtonLabel || 'Save',
		type: 'submit'
	};

	const secondaryButton = {
		onClick: form.onClickDiscard,
		label: form.secondaryButtonLabel || 'Discard'
	};

	const fieldRequired = form.fieldRequiredText && (
		<p className="form-instructions">Fields marked with an asterisk (<span className="required-indicator">*</span>) are required.</p>
	);

	return (
		<EscapeKeyListener onEscape={form.onClickDiscard}>
			<form className={classnames('card card-body', form.style)} onSubmit={form.onSubmit}>
				<legend className='text-capitalize'>{form.legend}</legend>
				{fieldRequired}
				{children}
				<div className="btn-toolbar justify-content-end" role="toolbar" aria-label="Toolbar for Forms">
					<div className="btn-group" role="group" aria-label="Form group">
						<Button {...primaryButton}>{primaryButton.label}</Button>
						<Button {...secondaryButton}>{secondaryButton.label}</Button>
					</div>
				</div>
			</form>
		</EscapeKeyListener>
	);
};
Form.propTypes = {
	buttonsDisabled: PropTypes.bool,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	style: PropTypes.string,
	legend: PropTypes.string.isRequired,
	fieldRequiredText: PropTypes.bool,
	onClickSave: PropTypes.func,
	onClickDiscard: PropTypes.func,
	onSubmit: PropTypes.func
};
Form.defaultProps = {
	buttonsDisabled: false,
	style: 'bg-light my-3',
	onClickSave: null,
	onClickDiscard: null,
	onSubmit: null
};

/**
 * Wraps a form control with the proper spacing.
 * [http://getbootstrap.com/css/#forms-example]
 */
const FormGroup = ({ children, ...props }) => (
	<div className={classnames('form-group', props.style)}>
		{children}
	</div>
);
FormGroup.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	style: PropTypes.string
};
FormGroup.defaultProps = {
	style: null
};

/**
 * Returns a Form Group with Bootstrap styling.
 * Provides support for a label, help text and validation state/style.
 * [http://getbootstrap.com/css/#forms-example]
 */
const FormGroupInputControl = ({ children, ...props }) => {
	const isRequiredIndicator = props.isRequired && (<span className="required-indicator">*</span>);
	return (
		<FormGroup style={props.style} >
			<label className='col-form-label' htmlFor={props.control.id}>{isRequiredIndicator}{props.label}</label>
			<FormControl {...props.control} label={props.label} isRequired={props.isRequired}>
				{children}
			</FormControl>
			{props.helpText && <span id={`help-block-${props.control.id}`} className={classnames('form-text', { 'invalid-feedback': props.control.inError })}>{props.helpText}</span>}
		</FormGroup>
	)
};
FormGroupInputControl.defaultProps = {
	children: null,
	helpText: null,
	style: null
};
FormGroupInputControl.propTypes = {
	label: PropTypes.string.isRequired,
	helpText: PropTypes.string,
	style: PropTypes.string,
	isRequired: PropTypes.bool,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	control: PropTypes.shape({
		id: PropTypes.string
	}).isRequired
};

export { Form as default, FormGroupInputControl, FormGroup };
