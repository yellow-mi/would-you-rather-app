import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Question extends Component {
  render() {
    const { question } = this.props;

    if (question) {
      const { id, author, optionOne, optionTwo } = question;
      const { avatarURL, name } = this.props.user;

      return (
        <div className="question-card">
          <div className="question-preview">
            <div className="avatar">
              <img src={avatarURL} alt={`Avatar of ${author}`} />
            </div>
            <div className="question-info">
              <h3 className="author-quest">{name} asks:</h3>
              <h4>Would you rather</h4>
              <h5>{`... ${optionOne.text}`}</h5>
              <h4>Or</h4>
              <h5>{`... ${optionTwo.text}`}</h5>
              <Link to={`/question/${id}`} className="question">
                <button className="btn">View question</button>
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];

  return {
    authedUser,
    questions,
    question: question ? question : null,
    user: question ? users[question.author] : null
    // question: question || null,
    // user: users[question?.author] || null,
  };
}
export default connect(mapStateToProps)(Question);
