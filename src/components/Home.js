import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import React, { Component } from "react";
class Home extends Component {
  state = {
    showList: "unanswered",
    answered: {
      selected: true,
    },
    unanswered: {
      selected: false,
    },
    selectedQuestionType: "unanswered",
  };

  handleList = (e) => {
    this.setState((prevState) => ({
      showList: !prevState.showList,
    }));
  };

  onQuestionTypeChange = (e) => {
    this.setState(() => ({
      selectedQuestionType: e.target.id,
    }));
  };

  isSelected = (name) => {
    return name === this.state.selectedQuestionType;
  };

  render() {

    return (
      <div className="center">
        <h3 className="center">Let's play:</h3>
        <div className="page">
          <form>
            <input
              type="radio"
              id="answered"
              value="ANSWERED"
              name="questionType"
              checked={this.isSelected("answered")}
              onChange={this.onQuestionTypeChange}
            />
            <label className="label-question" htmlFor="answered">ANSWERED</label>
            <input
              type="radio"
              id="unanswered"
              value="UNANSWERED"
              name="questionType"
              checked={this.isSelected("unanswered")}
              onChange={this.onQuestionTypeChange}
            />
            <label htmlFor="unanswered">UNANSWERED</label>
          </form>
        </div>
        <Dashboard questionType={this.state.selectedQuestionType} />
      </div>
    );
  }
}

export default connect()(Home);
