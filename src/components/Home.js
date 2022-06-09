import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import React, { Component } from "react";
import Question from "./Question";
class Home extends Component {
    state = {
        showList: 'unanswered'
    }

    handleList = e => {
        this.setState((prevState) => ({
            showList: !prevState.showList 
        }))
    }
    
    render() {
        const { showList } = this.state
        const { userQuestionData } = this.props
        
        return (
            <div className="center">
                <h3 className="center">Let's play:</h3>
                <div className="page">
                    <ul>
                        {
                            showList === 'unanswered' ? userQuestionData.unanswered.map(question => <Question key={question.id} />)
                         : userQuestionData.answered.map(question => <Question key={question.id} />)
                        } 
                    </ul>
                    <button onClick={this.handleList}>ANSWERED</button>
                    <button onClick={this.handleList}>UNANSWERED</button>
                </div>
               <Dashboard />
            </div>
        )
    }
}

function mapStateToProps ({ authedUser, questions,users }) {
    const answeredIds = Object.keys(users[authedUser].answers)
    const answered = Object.values(questions)
    .filter(question => answeredIds.includes(question.id))
    const unanswered = Object.values(questions)
    .filter(question => !answeredIds.includes(question.id))
    .sort((a,b) => b.timestamp - a.timestamp)
    
    return {
        userQuestionData: {
            answered,
            unanswered
        }
    }
}

export default connect(mapStateToProps)(Home)