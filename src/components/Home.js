import { connect } from "react-redux";
import Question from './Question'
import React, { Component } from "react";
class Home extends Component {
    render() {
        return (
            <div className="center">
                <h3 className="center">Let's play:</h3>
                <div>
                    <button>ANSWERED</button>
                    <button>UNANSWERED</button>
                </div>
                <ul className="dashboard-list">
                    {this.props.questionsId.map((id) => (
                        <li key={id}>
                            <Question id={id} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ questions }) {
    return {
        questionsId: Object.keys(questions)
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Home)