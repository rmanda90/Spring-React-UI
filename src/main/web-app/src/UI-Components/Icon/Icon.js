import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


/**
 * Generates a FontAwesome icon with the specified className.
 */

const Icon = props => (
	<span title={props.tooltip} className={classNames(`fa fa-${props.iconName}`)} />
);


Icon.defaultProps = {
	tooltip: null,
	iconStyle: null
};

Icon.propTypes = {
    /**
    * A string representing the name of the icon to render.
    */
	iconName: PropTypes.string.isRequired,
    /**
    * A string representing the tool tip to be displayed for the icon.
    */
	tooltip: PropTypes.string,
    /**
    * Additional styles to be applied to the icon.
    */
	iconStyle: PropTypes.string
};

export default Icon;
