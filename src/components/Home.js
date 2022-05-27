import { connect } from "react-redux";
import Question from './Question'
import React, { Component } from "react";
class Home extends Component {
    render() {
        return (
            <div>
                <Question />
                <h3> List of questions id </h3>
                <ul>
                    {this.props.questions.map((id) => (
                        <li key={id}>
                            <div>QUESTION ID: {id}</div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps ({ questions }) {
    return {
        questions: Object.keys(questions)
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Home)