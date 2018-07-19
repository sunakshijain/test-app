import React from "react";
import { Comment } from './Comment';

export const CommentList = (props) => {
  return (
    props.listData.map((data, index) => (
      <Comment key={index} data={data}/>
    ))
  )
}

