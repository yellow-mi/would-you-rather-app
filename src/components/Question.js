import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Question extends Component {
  render() {
    const { question } = this.props;

    if (question === null) {
      return <p>This question doesn't exist</p>;
    }

    const { id, author, timestamp, optionOne, optionTwo, name, avatarURL } =
      question;

    return (
      <Link to={`/question/${id}`} className="question">
        <img src={avatarURL} alt={`Avatar of ${author}`} />
        <div>Question made by {author}</div>
        <div className="question-info">
          <span>{name}</span>
        </div>
      </Link>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];

  return {
    authedUser,
    questions,
    question: question ? question : null,
    users,
  };
}
export default connect(mapStateToProps)(Question);
