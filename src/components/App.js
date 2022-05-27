import Home from './Home';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import React, { Component } from 'react';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  
  render() {

    return (
      <div className="App">
        {this.props.loading === true
        ? null
        : <Home /> }
      </div>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}


export default connect(mapStateToProps)(App);
