import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import React, { Component } from "react";
import Question from "./Question";
class Home extends Component {
  state = {
    showList: "unanswered",
    answered: {
      selected: true,
    },
    unanswered: {
      selected: false,
    },
    selectedQuestionType: "answered",
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
    console.log(name);
    return name === this.state.selectedQuestionType;
  };

  render() {
    // const { showList } = this.state;
    // const { userQuestionData } = this.props;

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
            <label htmlFor="answered">ANSWERED</label>
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
          {/* <button onClick={this.handleList}>ANSWERED</button>
                    <button onClick={this.handleList}>UNANSWERED</button> */}
        </div>
        <Dashboard questionType={this.state.selectedQuestionType} />
      </div>
    );
  }
}

// function mapStateToProps({ authedUser, questions, users }) {
//   const answeredIds = Object.keys(users[authedUser].answers);
//   const answered = Object.values(questions).filter((question) =>
//     answeredIds.includes(question.id)
//   );
//   const unanswered = Object.values(questions)
//     .filter((question) => !answeredIds.includes(question.id))
//     .sort((a, b) => b.timestamp - a.timestamp);

//   return {
//     userQuestionData: {
//       answered,
//       unanswered,
//     },
//   };
// }

export default connect()(Home);
