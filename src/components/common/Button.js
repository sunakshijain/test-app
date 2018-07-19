import React from 'react';
import PropTypes from 'prop-types';

export const Button = (props) => (
    <button
     type={props.type}
     onClick={props.controlFunc} 
     className={props.className}>{props.title}
     </button>
       
);

Button.propTypes = {
    type: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    controlFunc: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
}
