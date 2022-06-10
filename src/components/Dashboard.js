import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class Dashboard extends Component {
  getQuestionsForSelectedType = () => {
    const { questionType } = this.props
    const { authedUser } = this.props
    // filtra dalle question
  }

  render() {
    return (
      <ul className="dashboard-list">
        {this.props.questionsId.map((id) => (
          <li key={id}>
            <Question id={id} />
          </li>
        ))}
      </ul>
    )
  }
}

function mapStateToProps({ authedUser, questions }) {
  return {
    authedUser,
    questionsId: Object.keys(questions)
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps) (Dashboard)