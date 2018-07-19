import React from "react";

export const Comment = (props) => {
  return (
    <div className="row mb-4">
      <div className="col">
        <div className="card">
          <h6 className="card-header">{props.data.userName}</h6>
          <div className="card-body">
            <h5 className="card-title">{props.data.title}</h5>
            <p className="card-text">{props.data.comment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
