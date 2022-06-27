import React, { Component } from "react";
import { connect } from "react-redux"

class QuestionResults extends Component {
  render() {
    return (
      <div>
        Ciao, vediamo i risultati della poll
      </div>
    )
  }
}

export default connect()(QuestionResults)