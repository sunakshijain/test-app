import React from 'react';
import PropTypes from 'prop-types';

export const SingleInput = (props) => (
    <div className="form-group">
        <label htmlFor={props.label}>{props.label}</label>
        <input
            type={props.inputType}
            name={props.name}
            className="form-control"
            id={props.label}
            aria-describedby="emailHelp"
            value={props.content}
            placeholder={props.placeholder}
            onChange={props.controlFunc} />
    </div>
);

SingleInput.propTypes = {
    inputType: PropTypes.oneOf(['text', 'number']).isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    controlFunc: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
}

