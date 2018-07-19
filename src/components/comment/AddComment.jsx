import React, { Component } from "react";
import { SingleInput, TextArea, Button, ErrorMessage } from '../common';


export class AddComment extends Component {
  constructor() {
    super();
    this.state = {
      fields: {
        userName: '',
        title: '',
        comment: ''
      },
      errors: {},
    };
  }

  handleChange(e) {
    let fields = this.state.fields;
    const name = e.target.name;
    fields[name] = e.target.value;
    this.setState({ fields });
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.handleValidation())
    {
        this.props.saveComment(this.state.fields);
        this.props.redirectToCommentList();
    }
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["userName"]) {
      formIsValid = false;
      errors["userName"] = "Name field cannot be empty.";
    }
    else if (!fields["userName"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["userName"] = "Only letters are allowed in name field.";
    }
    

    //Title
    if (!fields["title"]) {
      formIsValid = false;
      errors["title"] = "Title field cannot be empty.";
    }
    else if (!fields["title"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["title"] = "Only letters are allowed in title field.";
    }

    //Comment
    if (!fields["comment"]) {
      formIsValid = false;
      errors["comment"] = "Comment field cannot be empty.";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }
  render() {
    const { userName, title, comment } = this.state.fields;
    return (
      <div className="row">
        <div className="col">
          <form>
            <ErrorMessage errors={this.state.errors} fields={this.state.fields}/>
            <SingleInput content={userName} inputType="text" label="Name" placeholder="Enter user name" name="userName" controlFunc={this.handleChange.bind(this)} />
            <SingleInput content={title} inputType="text" label="Title" placeholder="Enter comment title" name="title" controlFunc={this.handleChange.bind(this)} />
            <TextArea content={comment} label="Comment" placeholder="Enter comment" name="comment" controlFunc={this.handleChange.bind(this)} />
            <div className="text-right">
            <Button type="button" className="btn btn-secondary" controlFunc = {this.props.redirectToCommentList} title="Cancel" />
            <Button type="submit" className="btn btn-primary ml-2" controlFunc = {this.handleSubmit.bind(this)} title="Submit" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
