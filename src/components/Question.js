import React, { Component } from "react";
import { connect } from 'react-redux'
class Question extends Component {
    render() {
        const { question } = this.props

        if (question === null) {
            return <p>This question doesn't exist</p>
        }

        const {
            id, author, timestamp, optionOne, optionTwo, name, avatarURL
        } = question

        return(
            <div className="question">
                <img
                    src={avatarURL}
                    alt={`Avatar of ${name}`}
                />    
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
    const question = questions[id]
    
    return {
        authedUser,
        question: question ? question : null,
        users
    }
}
export default connect(mapStateToProps)(Question)