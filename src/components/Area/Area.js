import React from 'react';
import PropTypes from 'prop-types';

const Area = props => {
    const { value, onInput, type, errorMessage, label, name, htmlId } = props;
    return (
   	   <div className="form-group">
		{ label ? <label htmlFor={ htmlId } className="control-label">{ label }</label> : <></> }
			<textarea
				value={ value }
				onChange={ onInput }
				name={ name }
				id={ htmlId }
				className="form-control" />
			<span className="error">{ errorMessage }</span>
      	</div>
    );
};

Area.propTypes = {
	value: PropTypes.string.isRequired,
	htmlId: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	onInput: PropTypes.func.isRequired,
	errorMessage: PropTypes.string,
	label: PropTypes.string
};

export default Area;
