import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Home from "./Home";
import Leaderboard from "./Leaderboard";
import Login from "./Login";
import Nav from "./Nav";
import NewQuestion from "./NewQuestion";
import NotFound from "./NotFound";
import QuestionPage from "./QuestionPage";
import QuestionResults from "./QuestionResults";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { authedUser } = this.props;

    return (
      <Router>
        <div className="container">
          {authedUser === null ? (
            <Route path="/" component={Login} />
          ) : (
            <Fragment>
              <Nav />
              <Route path="/" exact component={Home} />
              <Route path="/leaderboard" exact component={Leaderboard} />
              <Route path="/login" component={Login} />
              <Route path="/add" component={NewQuestion} />
              <Route path="/question/:id" component={QuestionPage} />
              <Route path="*" component={NotFound} />
              <Route path="/question-results/:question_id" component={QuestionResults} />
              {/* <Route
                path="/question-results/:question_id"
                render={({ match }) => (
                  <QuestionResults id={match.params.question_id} />
                )}
              /> */}
            </Fragment>
          )}
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
