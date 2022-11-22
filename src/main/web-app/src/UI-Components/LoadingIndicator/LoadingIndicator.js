import React from 'react';
import Icon from '../Icon';
import './loading-ind.scss';

const LoadingIndicator = () => (
	<div className='loading-ind'>
		<div><i className="fa fa-spinner fa-5x fa-spin text-muted"></i></div>
		{/* <Icon iconName='spinner' iconStyle='fa fa-spinner fa-5x fa-spin text-muted' /> */}
	</div>
);

export default LoadingIndicator;
