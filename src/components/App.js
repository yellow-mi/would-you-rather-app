import Home from "./Home";
import { connect } from "react-redux";
import Login from "./Login";
import Nav from "./Nav";
import React, { Component, Fragment } from "react";
import { handleInitialData } from "../actions/shared";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewQuestion from "./NewQuestion";
import QuestionPage from "./QuestionPage";

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
              <Route path="/login" component={Login} />
              <Route path="/question/:id" component={QuestionPage} />
              <Route path="/add-question" component={NewQuestion} />
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
