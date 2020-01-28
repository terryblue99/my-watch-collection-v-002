
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import '../App.css'
import LogIn from '../containers/auth/LogIn'
import LogOut from '../containers/auth/LogOut'
import SignUp from '../containers/auth/SignUp'
import Homepage from '../components/Homepage'
import WatchRelatedInfo from '../components/WatchRelatedInfo'
import DashBoard from './DashBoard'
import AddWatch from './AddWatch'
import WatchDetail from './WatchDetail'
import EditWatch from './EditWatch'
import EditProfile from './EditProfile'
import RedirectTo from '../components/RedirectTo'

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
          : RedirectTo('/')
        )}/>
      </div> 
    )

    return (
      <div className='App'>
        <Router>
          <Switch>
              <Route exact path='/' component={Homepage} />
              <Route path='/login' component={LogIn} />
              <Route path='/logout' component={LogOut} />
              <Route path='/signup' component={SignUp} />
              {/* The following routes are only accessible from within the app as a logged in user */}
              {/* Any attempt to access them, other than within the app, will be redirected to the home page */}
              <PrivateRoute path='/dashboard' component={DashBoard} />
              <PrivateRoute path='/watches/add_watch' component={AddWatch} />
              <PrivateRoute path='/watches/:id/watch_detail' component={WatchDetail} />
              <PrivateRoute path='/watches/:id/edit_watch' component={EditWatch} />
              <PrivateRoute path='/edit_profile' component={EditProfile} />
              <PrivateRoute path='/watch_related_info' component={WatchRelatedInfo} />
              {/* the following catchall route will redirect unknown routes to the home page */}
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
