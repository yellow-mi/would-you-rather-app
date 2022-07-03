import React, { Component } from "react";
import { connect } from "react-redux";

class Leaderboard extends Component {
  render() {
    const { users } = this.props;

    console.log(`Users are: `, users);

    return (
      <div className="center">
        {users.map((user, index) => (
          <div>
            <div className="avatar">
              <img src={user.avatarURL} alt={user.name} />
            </div>
            <h4>{user.name}</h4>
            <p>Answered questions: {user.answersCount}</p>
            <p>Questions created: {user.questionsCount}</p>
            <p>Score: {user.score}</p>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.values(users)
      .map((user) => ({
        id: user.id,
        name: user.name,
        avatarURL: user.avatarURL,
        answersCount: Object.values(user.answers).length,
        questionsCount: user.questions.length,
        score: Object.values(user.answers).length + user.questions.length,
      }))
      .sort((a, b) => b.score - a.score),
  };
}

export default connect(mapStateToProps)(Leaderboard);
