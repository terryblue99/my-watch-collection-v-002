
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
import { loggedInAction } from '../actions/currentUser'
import LogOut from '../components/auth/LogOut'
import SignUp from '../components/auth/SignUp'
import Homepage from '../components/Homepage'
import DashBoard from './DashBoard'
import AddWatch from './AddWatch'
import EditWatch from './EditWatch'

class App extends Component {

  state = {
    logged_in: null
  }

  componentDidMount = (nextProps) => {
    console.log('*** componentDidMount ***')
    this.checkLoggedIn()
  }

  // componentWillUpdate = () => {
  //   console.log('*** componentDidUpdate ***')
  //   this.checkLoggedIn()
  // }

  checkLoggedIn = () => {
    console.log('*** checkLoggedIn ***')
    let logged_in
    this.props.loggedInAction()
    .then((response) => {
      logged_in = response
      this.setState({
        logged_in: logged_in
      })
    })
  }

  render() {
    console.log('*** App this.state.logged_in: ', this.state.logged_in)
    console.log('*** App this.props: ', this.props)
    console.log('*** App current url: ', window.location.href)
    const PrivateRoute = ({ component: Component, ...rest}) => ( // rename component with a capital 'C'
                                                                 // ...rest is rest of arguments; path & component
      <div> 
        <Route {...rest} render={(props) => (
          this.props.user && this.props.user.logged_in
          ? <Component {...props} /> // props are location, match & history
          : <Redirect to={{
              pathname: '/login',
              state: { from: props.location }
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
              <Redirect from='*' to={{pathname: '/dashboard'}} />
          </Switch> 
        </Router>        
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => { 
  console.log('*** mapStateToProps ownProps: ', ownProps)
  return {
    user: state.currentUser
    // currentURL: ownProps
  } 
}

export default connect(mapStateToProps, { loggedInAction })(App)
