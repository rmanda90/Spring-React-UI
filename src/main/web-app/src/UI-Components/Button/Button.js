import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './button.scss';

/**
 * Button implementation based on the Twitter Bootstrap Button.
 * [http://getbootstrap.com/css/#buttons]
 */
const Button = props => (
	<button
		id={props.id}
		className={classnames('btn', props.className)}
		type={props.type}
		title={props.title}
		disabled={props.disabled}
		onClick={props.onClick}
		ref={props.refCallback}
		aria-haspopup={props.dropdown}
		aria-expanded={props.open}
	>
		{props.children}
	</button>
);

Button.propTypes = {
	/**
	 * The ID to assign to the button.
	 */
	id: PropTypes.string,
	/**
	 * The title for the button, which is used to create
	 * a tooltip.
	 */
	title: PropTypes.string,
	/**
	 * A boolean flag indicating whether or not the button
	 * is disabled.
	 */
	disabled: PropTypes.bool,
	/**
	 * The type of the button.
	 */
	type: PropTypes.oneOf(['submit', 'reset', 'button', 'menu']),
	/**
	 * Additional button styling
	 */
	className: PropTypes.string,
	/**
	 * The onClick function handler
	 */
	onClick: PropTypes.func,
	/**
	 * A React ref callback that will be called after the component has mounted.
	 */
	refCallback: PropTypes.func,
	/**
	 * Children that will be rendered inside of the button.
	 */
	children: PropTypes.node.isRequired,
	/**
	 * indicator if the button is a drop down
	 * Used for aria-haspopup
	 */
	dropdown: PropTypes.bool,
	/**
	 * indicates if the button is in an open state
	 * user for aria-expanded label
	 */
	open: PropTypes.bool
};

Button.defaultProps = {
	id: '',
	title: '',
	disabled: false,
	className: 'btn-secondary',
	type: 'button',
	onClick: null,
	refCallback: null,
	dropdown: false,
	open: false
};

export default Button;
