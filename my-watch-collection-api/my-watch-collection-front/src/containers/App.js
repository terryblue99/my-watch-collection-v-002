
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
import LogOut from '../components/auth/LogOut'
import SignUp from '../components/auth/SignUp'
import Homepage from '../components/Homepage'
import DashBoard from './DashBoard'
import AddWatch from './AddWatch'
import WatchDetail from '../components/WatchDetail'
import EditWatch from './EditWatch'
import EditProfile from './EditProfile'

class App extends Component {

  render() {

    let a_user_exists
    let is_logged_in
    
    if (this.props.user) {
      a_user_exists = this.props.user
      is_logged_in = this.props.user.logged_in
    }

    const PrivateRoute = ({ component: Component, ...rest}) => ( // rename component with a capital 'C'
                                                                 // ...rest is rest of arguments; path & component
      <div> 
        <Route {...rest} render={(props) => (
          a_user_exists && is_logged_in
          ? <Component {...props} /> 
          : <Redirect to={{
              pathname: '/'
            }} />
        )}/>
      </div> 
    )

    return (
      <div className='App'>
        <Router>
          <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/login' component={LogIn} />
              <Route exact path='/logout' component={LogOut} />
              <Route exact path='/signup' component={SignUp} />
              {/* The following routes are only accessible from within the app ay a logged in user */}
              <PrivateRoute exact path='/dashboard' component={DashBoard} />
              <PrivateRoute exact path='/watches/add_watch' component={AddWatch} />
              <PrivateRoute exact path='/watches/:id/watch_detail' component={WatchDetail} />
              <PrivateRoute exact path='/watches/:id/edit_watch' component={EditWatch} />
              <PrivateRoute exact path='/edit_profile' component={EditProfile} />
              {/* the following catchall route will divert unknown routes to the Log In/Sign Up screen */}
              <PrivateRoute from='*' />
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

export default connect(mapStateToProps)(App)
