import React from 'react';

export const ErrorMessage = (props) => {
    if(Object.keys(props.fields).length === Object.keys(props.errors).length){
      return (<div className="text-danger" role="alert">
          All fields are required.
      </div>)
    }
    return Object.keys(props.errors).map(item => (
        <React.Fragment key={item}>
        <span className="text-danger">{props.errors[item]}</span> 
        <br/>
        </React.Fragment>
    ))
}