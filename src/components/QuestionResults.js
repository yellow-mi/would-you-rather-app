import React, { Component } from "react";
import { connect } from "react-redux";

class QuestionResults extends Component {
  render() {
    const { authedUser, question, user } = this.props;
    const { optionOne, optionTwo } = question
    const optionOneVotes = optionOne.votes.length;
    const optionTwoVotes = optionTwo.votes.length;
    const { name } = user;

    const totalVotes = optionOneVotes + optionTwoVotes;

    const optionOnePercentage = (optionOneVotes / totalVotes) * 100;
    const optionTwoPercentage = (optionTwoVotes / totalVotes) * 100;

    function userHasAnswered(question, authedUser) {
      const optionOneSelected = question.optionOne.votes.includes(authedUser);
      const optionTwoSelected = question.optionTwo.votes.includes(authedUser);
      if (optionOneSelected || optionTwoSelected) {
        return true;
      }
    }

    if (userHasAnswered(question, authedUser)) {
      return (
        <div className="center">
          <h3>Results of the Poll</h3>
          <h4>{name} asked</h4>
          <div className="question-card">
            <div className="question-info">
              <p>Would you rather {question.optionOne.text}</p>
              <div className="progress">
                <div style={{ width: `${optionOnePercentage}%` }}>
                  {optionOnePercentage > 0 ? `${Math.round(optionOnePercentage)}%` : ""}
                </div>
              </div>
              <p>
                ({optionOneVotes} out of {totalVotes} votes)
              </p>
            </div>
          </div>
          <p>OR</p>
          <div className="question-card">
            <div className="question-info">
              <p>Would you rather {question.optionTwo.text}</p>
              <div className="progress">
                <div style={{ width: `${optionTwoPercentage}%` }}>
                  {optionTwoPercentage > 0 ? `${Math.round(optionTwoPercentage)}%` : ""}
                </div>
              </div>
              <p>
                ({optionTwoVotes} out of {totalVotes} votes)
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      <p>You have not answered to the question yet</p>;
    }
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id]
  const { author } = question

  return {
    authedUser,
    question,
    user: users[author]
  }
}

export default connect(mapStateToProps)(QuestionResults);
