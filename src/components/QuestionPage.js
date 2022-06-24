import React, { Component } from "react";
import { connect } from "react-redux";

class QuestionPage extends Component {
  render() {
    return(
      <div>
        <h5>Something</h5>
      </div>
    )
  }
}

export default connect()(QuestionPage)