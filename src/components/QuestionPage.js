import React, { Component } from "react";
import { connect } from "react-redux";
import { addAnswerToUser } from "../actions/users";
import { addAnswerToQuestion } from "../actions/questions";
import QuestionResults from "./QuestionResults";
import { Redirect, withRouter } from "react-router-dom";
class QuestionPage extends Component {
  state = {
    selectedOption: "optionOne",
  };

  onOptionTypeChange = (e) => {
    this.setState(() => ({
      selectedOption: e.target.value,
    }));
  };

  isSelected = (option) => {
    return option === this.state.selectedOption;
  };

  handleSaveAnswer = (e) => {
    const answer = this.state.selectedOption;
    const { authedUser, dispatch, id: qid } = this.props;

    e.preventDefault();
    dispatch(addAnswerToUser(authedUser, qid, answer));
    dispatch(addAnswerToQuestion(authedUser, qid, answer));
    // this.props.history.push(`/question-results/${qid}`);
    <Redirect to={{pathname: `/question-results/${qid}`}} />
  };

  render() {
    const { avatarURL, name } = this.props.user;
    const { authedUser, question, user } = this.props;
    const { id, optionOne, optionTwo } = question;

    if (
      optionOne.votes.includes(authedUser) ||
      optionTwo.votes.includes(authedUser)
    ) {
      return (
        <QuestionResults
        authedUser={authedUser}
        id={this.props.question.id}
        question={question}
        user={user}
        />
      );
    } else {
      return (
        <div className="question-card">
          {/* <div className="avatar">
      <img src={avatarURL} alt={`Avatar of ${name}`} />
      </div> */}
          <form className="question-info">
            <h3>{name} asks, would you rather...</h3>
            <div>
              <input
                checked={this.isSelected("optionOne")}
                onChange={this.onOptionTypeChange}
                type="radio"
                value="optionOne"
              />
              <label htmlFor="optionOne">{optionOne.text}</label>
            </div>
            <div>
              <input
                checked={this.isSelected("optionTwo")}
                onChange={this.onOptionTypeChange}
                type="radio"
                value="optionTwo"
              />
              <label htmlFor="optionTwo">{optionTwo.text}</label>
            </div>
            <button
              className="btn"
              onClick={this.handleSaveAnswer}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      );
    }
  }
}

function mapStateToProps({ authedUser, questions, users }, props) {
  const id = props.match.params.id;
  const question = questions[id];

  return {
    authedUser,
    id,
    question,
    questions,
    user: users[question.author],
    users,
  };
}

export default withRouter(connect(mapStateToProps)(QuestionPage));
