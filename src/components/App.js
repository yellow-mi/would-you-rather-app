import Home from './Home';
import { connect } from 'react-redux'
import Nav from './Nav';
import React, { Component, Fragment } from 'react';
import { handleInitialData } from '../actions/shared'
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  
  render() {
    return (
      <Router>
        <Fragment>
          <div className='container'>
            <Nav />
              <div className="App">
                {this.props.loading === true 
                ? null 
                : <Home />}
              </div>
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps( {authedUser }) {
  return {
    loading: authedUser === null
  }
}


export default connect(mapStateToProps)(App);
