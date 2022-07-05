import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSaveQuestion } from "../actions/questions";
import { Redirect } from "react-router-dom";
class NewQuestion extends Component {
  state = {
    redirect: false,
    optionA: "",
    optionB: "",
  };

  onChangeA = (e) => {
    const value = e.target.value;
    this.setState(() => ({
      optionA: value,
    }));
  };

  onChangeB = (e) => {
    const value = e.target.value;
    this.setState(() => ({
      optionB: value,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { authedUser, dispatch } = this.props;
    const { optionA, optionB } = this.state;

    if (authedUser && (optionA !== '' && optionB !== '')) {
      dispatch(handleSaveQuestion(optionA, optionB, authedUser));
    }

    this.setState(() => ({
      redirect: true,
      optionA: "",
      optionB: "",
    }));
  };

  render() {
    const { redirect, optionA, optionB } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    } else {
      return (
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
            <button disabled={this.inputIsEmpty} type="submit">
              Submit
            </button>
          </form>
        </div>
      );
    }
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(NewQuestion);
