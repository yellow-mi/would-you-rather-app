import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../actions/authedUser";
import { Link } from "react-router-dom";

class Nav extends Component {
  handleClick = (e) => {
    e.preventDefault()
    
    const { dispatch } = this.props
    dispatch(logout())
  }
  
  render() {
    const { authedUser, users } = this.props

    return (
      <nav className="nav">
        <ul>
          <li>
            <Link to="/" activeclassname="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/leaderboard" activeclassname="active">
              Leaderboard
            </Link>
          </li>
          <li>
            <Link to="/add" activeclassname="active">
              Add question
            </Link>
          </li>
        </ul>
        <div>
          <p>Hello, {users[authedUser].name}</p>
          {/* <img className="avatar-login" src={users[authedUser].avatarURL} alt={`This is ${authedUser}`} /> */}
          <button onClick={this.handleClick}>logout</button>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users
  };
}

export default connect(mapStateToProps)(Nav)
