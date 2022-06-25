import React, { Component } from "react";
import { connect } from "react-redux";

class QuestionPage extends Component {
  render() {
    
    return (
      <div className="question-card">
        <h3>Asked by {}</h3>
        <form className="question-info">
          <h4>Would you rather</h4>
          <div>
            <input 
              type='radio'
              value='optionOne'
            />
            <label htmlFor="optionOne">option one: {}</label>
          </div>
          <div>
            <input 
              type='radio'
              value='optionTwo'
            />
            <label htmlFor="optionTwo">option two</label>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions, users }, props) {
  const id = props.match.params.id
  console.log("id:", id)
  return {
    authedUser,
    questions,
    users
  }
}

export default connect(mapStateToProps)(QuestionPage)