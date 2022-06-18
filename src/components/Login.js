import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

class Login extends Component {

  state = {
      option: ''
  }

  onChange = (e) => {
      const value = e.target.value
      this.setState(() => ({
          option: value
      }))
  }

  handleSubmit = (e) => {
      e.preventDefault()

      const { dispatch } = this.props
      const { option } = this.state

      if (option !== '') dispatch(setAuthedUser(option))

      this.setState(() => ({
          option: ''
      }))

  }

  render() {
      return (
          <div className="container">
              <h1>Welcome To Would You Rather Game</h1>
              <div className='login'>
                  <h2>Sign in</h2>
                  <form className='loginForm' onSubmit={this.handleSubmit}>
                      <select onChange={this.onChange}>
                          <option value=''>Select a user...</option>
                          <option value='sarahedo'>Sarah Edo</option>
                          <option value='tylermcginnis'>Tyler McGinnis</option>
                          <option value='johndoe'>John Doe</option>
                      </select>
                      <button type='submit'>
                          Log in
                  </button>
                  </form>
              </div>
          </div>
      )
  }
}

export default connect()(Login)