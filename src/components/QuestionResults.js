import React, { Component } from "react";
import { connect } from "react-redux";

class QuestionResults extends Component {
  render() {
    const { question } = this.props
    // const { optionOne, optionTwo } = question

    return (
      <div className="question-info">
        <h2>Results</h2>
        <p>Something</p>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }, { id }) {
  // const id = props.match.params.question_id;
  const question = questions[id];

  return {
    authedUser,
    id,
    question,
    questions,
    users,
  };
}

export default connect(mapStateToProps)(QuestionResults);
