import React, { Component } from "react";
import { connect } from "react-redux";

class QuestionResults extends Component {
  render() {
    const { question } = this.props;
    const optionOne = question.optionOne.text;
    const optionTwo = question.optionTwo.text;

    return (
      <div className="question-info">
        <h2>Results</h2>
        <p>Would you rather {optionOne}</p>
        <p>Would you rather {optionTwo}</p>
      </div>
    );
  }
}

function mapStateToProps( {authedUser, questions, users}, props ) {
  const { id } = props.match.params
  const question = questions[id];

  return {
    question: question ? question : null
  }

}

export default connect(mapStateToProps)(QuestionResults);
