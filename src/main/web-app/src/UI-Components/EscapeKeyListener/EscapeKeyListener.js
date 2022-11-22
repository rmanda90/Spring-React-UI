import { Children, Component } from 'react';
import PropTypes from 'prop-types';

/**
 * A component that listens to keydown events and
 * calls a provided function when the Esc key is
 * pressed.
 *
 * @class EscapeKeyListener
 * @extends {Component}
 */
class EscapeKeyListener extends Component {
	constructor(props) {
		super(props);
		this.handleEscapeKey = this.handleEscapeKey.bind(this);
	}

	/**
	 * Adds a keydown listener when the component is mounted.
	 */
	componentDidMount() {
		document.body.addEventListener('keydown', this.handleEscapeKey, false);
	}

	/**
	 * Removes the keydown listener when the component will unmount.
	 */
	componentWillUnmount() {
		document.body.removeEventListener('keydown', this.handleEscapeKey, false);
	}

	/**
	 * Calls the onEscape property if the keydown event's
	 * keyCode equates to the Esc key.
	 *
	 * @param {React.Event} e
	 * 		The keydown event.
	 */
	handleEscapeKey(e) {
		if (e.keyCode === 27) {
			this.props.onEscape();
		}
	}

	render() {
		return Children.only(this.props.children);
	}
}
EscapeKeyListener.propTypes = {
	/**
	 * The inner children to render.
	 */
	children: PropTypes.element.isRequired,
	/**
	 * The function to be called when the Esc key is pressed.
	 */
	onEscape: PropTypes.func.isRequired
};

export default EscapeKeyListener;
