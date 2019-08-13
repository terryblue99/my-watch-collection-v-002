
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
import EditWatch from './EditWatch'

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
              pathname: '/login',
              state: { 
                from: props.location
              }
            }} />
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
              <PrivateRoute exact path='/dashboard' component={DashBoard} />
              <PrivateRoute exact path='/watches/new' component={AddWatch} />
              <PrivateRoute path='/watches/:id' component={EditWatch} />
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
