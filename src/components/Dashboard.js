import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class Dashboard extends Component {
  // getQuestionsForSelectedType = () => {
  //   const { questionType } = this.props
  //   const { authedUser } = this.props
  //   // filtra dalle questions
  // }



  render() {
    const { authedUser, userQuestionData } = this.props
    const { selectedQuestionType } = this.props
    return (
      // <ul className="dashboard-list">
      //   {this.props.questionsId.map((id) => (
      //     <li key={id}>
      //       <Question id={id} />
      //     </li>
      //   ))}
      // </ul>
      <ul className="dashboard-list">
        {
          selectedQuestionType 
          ? userQuestionData.answered.map(question => (
            <li key={question.id}>
              <Question id={question.id} />
            </li>
          )) 
          : userQuestionData.unanswered.map(question => (
            <li key={question.id}>
              <Question id={question.id} />
            </li>
          )) 
        }
      </ul>
    )
  }
}

// function mapStateToProps({ authedUser, questions }) {
//   return {
//     authedUser,
//     questionsId: Object.keys(questions)
//         .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
//   }
// }

function mapStateToProps({ authedUser, questions, users }, props) {
    const answeredIds = Object.keys(users[authedUser].answers);
    const answered = Object.values(questions).filter((question) =>
      answeredIds.includes(question.id)
    );
    const unanswered = Object.values(questions)
      .filter((question) => !answeredIds.includes(question.id))
      .sort((a, b) => b.timestamp - a.timestamp);
  
    return {
      // questionsId: Object.keys(questions)
      //   .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
      userQuestionData: {
        answered,
        unanswered,
      },
    };
  }

export default connect(mapStateToProps) (Dashboard)