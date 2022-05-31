import { connect } from "react-redux";
import Question from './Question'
import React, { Component } from "react";
class Home extends Component {
    render() {
        return (
            <div className="center">
                <h3 className="center">List of questions</h3>
                <ul className="dashboard-list">
                    <li>
                    Would you rather go To Thailand or Mexico?
                    </li>
                    <li>
                    Would you rather eat a Mango or Papaya?
                    </li>
                </ul>
            </div>
        )
    }
}

export default connect()(Home)