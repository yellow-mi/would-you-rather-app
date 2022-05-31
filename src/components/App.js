import Home from './Home';
import { connect } from 'react-redux'
import React, { Component } from 'react';
import { handleInitialData } from '../actions/shared'
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <Home />
        </div>
      </Router>
    );
  }
}


export default connect()(App);
