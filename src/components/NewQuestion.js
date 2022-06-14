import React, { Component } from "react";
import { connect } from "react-redux";

class NewQuestion extends Component {
  render() {
    return(
      <div>
        <form>
          <h3>Create New Question</h3>
          <p>Complete the question:</p>
          <h4>Would you rather...</h4>
          <input 
            type="text"
            placeholder="Enter option one"
          />
          <p>or</p>
          <input 
            type="text"
            placeholder="Enter option two"
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default connect()(NewQuestion)