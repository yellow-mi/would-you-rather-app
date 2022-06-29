import React, { Component } from "react";
import { connect } from "react-redux";
import { addAnswerToUser } from "../actions/users";
import { addAnswerToQuestion } from "../actions/questions";
import { Link } from "react-router-dom";

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
  };

  render() {
    const { avatarURL, name } = this.props.user;
    const { question } = this.props;
    const { id } = question;
    const optionOne = question.optionOne.text;
    const optionTwo = question.optionTwo.text;

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
            <label htmlFor="optionOne">{optionOne}</label>
          </div>
          <div>
            <input
              checked={this.isSelected("optionTwo")}
              onChange={this.onOptionTypeChange}
              type="radio"
              value="optionTwo"
            />
            <label htmlFor="optionTwo">{optionTwo}</label>
          </div>
          <Link to={`/question-results/question${id}`}>
            <button
              className="btn"
              onClick={this.handleSaveAnswer}
              type="submit"
            >
              Submit
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }, props) {
  const id = props.match.params.id;
  // console.log("id:", id)
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

export default connect(mapStateToProps)(QuestionPage);
