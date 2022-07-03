import React, { Component } from "react";
import { connect } from "react-redux";

class QuestionResults extends Component {
  render() {
    const { authedUser, question, user } = this.props;
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
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
              {/* <p>{optionOnePercentage}% on Total votes</p> */}
              <div className="progress">
                <div style={{ width: `${optionOnePercentage}%` }}>
                  {optionOnePercentage > 0 ? `${optionOnePercentage}%` : ""}
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
              {/* <p>{optionTwoPercentage}% on Total votes</p> */}
              <div className="progress">
                <div style={{ width: `${optionTwoPercentage}%` }}>
                  {optionTwoPercentage > 0 ? `${optionTwoPercentage}%` : ""}
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

export default connect()(QuestionResults);
