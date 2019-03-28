import React from 'react';

const Form = props => {
	return (
		<form onSubmit={props.onSubmit} className="form form-horizontal" autoComplete="off">
			{props.children}
		</form>
	)
};

export default Form;