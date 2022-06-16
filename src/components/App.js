import Home from './Home';
import { connect } from 'react-redux'
import Login from './Login'
import Nav from './Nav';
import React, { Component, Fragment } from 'react';
import { handleInitialData } from '../actions/shared'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NewQuestion from './NewQuestion';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  
  render() {
    const { authedUser } = this.props

    return (
      <Router>
          <div className="page">
            {authedUser === null 
              ? (
                // <div className='container'>  </div>
                <Routes>
                  <Route path='/' element={<Login />} />
                </Routes>
              )
              : (
           <Fragment>
            <Nav />
              <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/add-question' element={<NewQuestion />} />
              </Routes>
            </Fragment>
              )
            }
          </div>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}


export default connect(mapStateToProps)(App);
