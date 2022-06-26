import React, { Component } from "react";
import { connect } from "react-redux";
import { saveQuestionAnswer } from "../utils/api";

class QuestionPage extends Component {
  handleSaveAnswer = e => {
      e.preventDefault()
      dispatchEvent(saveQuestionAnswer())
  }
  
  render() {
    const { name } = this.props.user;
    const { question } = this.props
  
    return (
      <div className="question-card">
        <form className="question-info">
          <h3>{name} asks, would you rather...</h3>
          <div>
            <input 
              type='radio'
              value='optionOne'
            />
            <label htmlFor="optionOne">{question.optionOne.text}</label>
          </div>
          <div>
            <input 
              type='radio'
              value='optionTwo'
            />
            <label htmlFor="optionTwo">{question.optionTwo.text}</label>
          </div>
          <button className="btn" onClick={this.handleSaveAnswer} type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions, users }, props) {
  const id = props.match.params.id
  // console.log("id:", id)
  const question = questions[id];

  return {
    authedUser,
    id,
    question,
    questions,
    user: users[question.author],
    users
  }
}

export default connect(mapStateToProps)(QuestionPage)