import { CLEAR_EXCEPTIONS } from './exception.actions';

/**
 * Reducer responsible for handling exception related actions.
 *
 * @param {object} state
 * 		The current exception state.
 * @param {object} action
 * 		The dispatched action.
 */
const exceptions = (state = {}, action) => {
	const { error, type } = action;
	if (error) {
		return error;
	}
	switch (type) {
		// case TRIGGER_EXCEPTION:
		// 	return action.exception;
		case CLEAR_EXCEPTIONS:
			return {};
		default:
			return state;
	}
};

export default exceptions;
