import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSaveQuestion } from '../actions/questions'

class NewQuestion extends Component {
  state = {
    optionA: '',
    optionB: ''
  }

  onChangeA = (e) => {
    const value = e.target.value
    this.setState(() => ({
      optionA: value
    }))
  }

  onChangeB = (e) => {
    const value = e.target.value
    this.setState(() => ({
      optionB: value
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { authedUser, dispatch } = this.props
    const { optionA, optionB } = this.state

    authedUser && dispatch(handleSaveQuestion(optionA, optionB))

    this.setState(() => ({
      optionA: '',
      optionB: ''
    }))
  }

  render() {
    const { optionA, optionB } = this.state
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Create New Question</h3>
          <p>Complete the form to add a new question:</p>
          <h4>Would you rather...</h4>
          <input 
            onChange={this.onChangeA}
            placeholder="Enter option one"
            type="text"
            value={optionA}
          />
          <p>or</p>
          <input 
            onChange={this.onChangeB}
            placeholder="Enter option two"
            type="text"
            value={optionB}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(NewQuestion)