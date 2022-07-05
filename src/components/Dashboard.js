import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class Dashboard extends Component {
  render() {
    const { questionType, answeredQuestionIds, unansweredQuestionIds } =
      this.props;

    return (
      <ul className="dashboard-list">
        {questionType === "answered"
          ? answeredQuestionIds.map((questionId) => (
                <li key={questionId}><Question id={questionId} /></li>
            ))
          : unansweredQuestionIds.map((questionId) => (
            <li key={questionId}><Question id={questionId} /></li>
            ))}
      </ul>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  // answered question ids
  let answeredQuestionIds = authedUser ? Object.keys(users[authedUser].answers)
    : null;
  answeredQuestionIds = answeredQuestionIds
    ? answeredQuestionIds.sort(
        (a, b) => b.timestamp - a.timestamp
      ).reverse()
    : null;
  // unanswered question ids
  let unansweredQuestionIds = authedUser ? Object.keys(questions).filter((question) => {
        return !answeredQuestionIds.includes(question);
      }) : null;
  unansweredQuestionIds = unansweredQuestionIds
    ? unansweredQuestionIds.sort((a, b) => b.timestamp - a.timestamp).reverse()
    : null;

  return {
    answeredQuestionIds,
    unansweredQuestionIds,
    authedUser,
  };
}

export default connect(mapStateToProps)(Dashboard);
