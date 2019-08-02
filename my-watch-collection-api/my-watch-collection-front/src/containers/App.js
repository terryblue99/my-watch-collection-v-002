
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import './App.css'
import LogIn from '../components/auth/LogIn'
import SignUp from '../components/auth/SignUp'
import Homepage from '../components/Homepage'
import FetchWatches from './GetWatches'
import AddWatch from './AddWatch'
import EditWatch from './EditWatch'
import fakeAuth from '../components/auth/fakeAuth'

const PrivateRoute = ({ component: Component, ...rest}) => ( // rename component with a capital 'C'
                                                             //  ...rest is rest of arguments; path & component
  <Route {...rest} render={(props) => (
      fakeAuth.isAuthenticated === true
        ? <Component {...props} /> // props are location, match & history
        : <Redirect to={{
              pathname: '/login',
              state: { from: props.location }
          }} />
  )}/>
)

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Router>
          <Switch>
              <Route exact path='/' component={Homepage} />
              <Route path='/login' component={LogIn} />
              <Route path='/signup' component={SignUp} />
              <PrivateRoute exact path='/watches' component={FetchWatches} />
              <PrivateRoute exact path='/watches/new' component={AddWatch} />
              <PrivateRoute path='/watches/:id' component={EditWatch} />
          </Switch> 
        </Router>        
      </div>
    )
  }
}

export default App
