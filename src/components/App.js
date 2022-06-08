import Home from './Home';
import { connect } from 'react-redux'
import Login from './Login'
import Nav from './Nav';
import React, { Component, Fragment } from 'react';
import { handleInitialData } from '../actions/shared'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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
            {this.props.loading === true
              ? null
              : <div className="page">
              <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/login' element={<Login />} />
              </Routes>
              </div>}
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
