import React, { Component } from "react";
import { connect } from "react-redux";
import { saveComment } from "../actions/comment";
import { AddComment, CommentList } from "../components/comment";
import { Button } from "../components/common";

class CommentContainer extends Component {
  constructor() {
    super();
    this.state = {
      isAddCmntBtnClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ isAddCmntBtnClicked: true });
  }

  redirectToCommentList() {
    this.setState({ isAddCmntBtnClicked: false });
  }
  renderComponent() {
    if (this.state.isAddCmntBtnClicked) {
      return (
        <AddComment
        saveComment={this.props.saveComment}
        redirectToCommentList={this.redirectToCommentList.bind(this)}
        />
      );
    } else {
      return (
        <React.Fragment>
          <div className="row mb-4">
            <div className="col">
            <Button type="button" className="btn btn-primary" controlFunc = {this.handleClick.bind(this)} title="Add Comment" />
            </div>
          </div>
          <CommentList listData={this.props.formData} />
        </React.Fragment>
      );
    }
  }
  render() {
    return (
      <div className="row mb-4">
        <div className="col">{this.renderComponent()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  formData: state.comment.commentDataList //Fetch state from reducer
});

const mapDispatchToProps = dispatch => ({
  saveComment: fields => dispatch(saveComment(fields)) // dispatch action-creator
});

// connect react app to redux and mapStateToProps and mapDispatchToProps will be passed as props to the CommentContainer
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentContainer);
