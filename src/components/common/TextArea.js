import React from 'react';
import PropTypes from 'prop-types';

export const TextArea = (props) => (
        <div className="form-group">
        <label htmlFor={props.label}>{props.label}</label>
        <textarea
            type="text"
            name={props.name}
            className="form-control"
            id={props.label}
            aria-describedby="emailHelp"
            value={props.content}
            placeholder={props.placeholder}
            onChange={props.controlFunc} />
        </div>
);

TextArea.propTypes = {  
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    controlFunc: PropTypes.func.isRequired
  };
  