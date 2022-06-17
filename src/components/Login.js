import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

class Login extends Component {
  state ={
    option: ''
  }
  handleChange = (e) => {
    const value = e.target.value
    this.setState(() => ({
      option: value
    }))
  }
  
  handleLogin = (e) => {
    e.preventDefault()
    const { dispatch } = this.props;
    const { option } = this.state
    
    option !== '' && dispatch(setAuthedUser(e))
    
    this.setState(() => ({
      option: ''
    }))
  };

  render() {

    return (
      <div className="login">
        <h3>Welcome to the Would You Rather App!</h3>
        <h5>Please sign in to continue</h5>
        <form onSubmit={this.handleLogin}>
          <select onChange={this.handleChange}>
            <option value="">Select a user...</option>
            <option value="sarahedo">Sarah Edo</option>
            <option value="tylermcginnis">Tyler McGinnis</option>
            <option value="johndoe">John Doe</option>
          </select>
          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }
}

export default connect()(Login);
