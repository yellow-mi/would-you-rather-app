import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
  handleLogin = (id) => {
    const { dispatch } = this.props
    dispatch(setAuthedUser(id))
  }

  render() {
    return(
      <div className="login">
        <form>
        <h3>Welcome to the Would You Rather App!</h3>
        <h5>Please sign in to continue</h5>
        <select>
          {this.props.userId.map(user => (
                  <option value={user}>
                    {user}
                  </option>
          ))}
        </select>
        <button type="submit">Log in</button>
      </form>  
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    usersId: Object.keys(users)
  }
}

export default connect(mapStateToProps)(Login)