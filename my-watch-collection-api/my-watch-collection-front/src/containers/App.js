
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import './App.css'
import LogIn from '../components/auth/LogIn'
import { loggedIn } from '../actions/currentUser'
import LogOut from '../components/auth/LogOut'
import SignUp from '../components/auth/SignUp'
import Homepage from '../components/Homepage'
import DashBoard from './DashBoard'
import AddWatch from './AddWatch'
import EditWatch from './EditWatch'

class App extends Component {

  render() {
    
    return (
      <div className='App'>
        <Router>
          <Switch>
              <Route exact path='/' component={Homepage} />
              <Route path='/login' component={LogIn} />
              <Route path='/logout' component={LogOut} />
              <Route path='/signup' component={SignUp} />
              {this.props.user && this.props.user.logged_in 
                ? <Route exact path='/dashboard' component={DashBoard} /> 
                : <Redirect to={{pathname: '/login'}} />}
              {this.props.user && this.props.user.logged_in 
                ? <Route exact path='/watches/new' component={AddWatch} /> 
                : <Redirect to={{pathname: '/login'}} />}
              {this.props.user && this.props.user.logged_in 
                ? <Route exact path='/watches/:id' component={EditWatch} /> 
                : <Redirect to={{pathname: '/login'}} />}
              <Redirect from='*' to={{pathname: '/dashboard'}} />
          </Switch> 
        </Router>        
      </div>
    )
  }
}

const mapStateToProps = (state) => { 
  return {
    user: state.currentUser
  } 
}

export default connect(mapStateToProps, {loggedIn})(App)
