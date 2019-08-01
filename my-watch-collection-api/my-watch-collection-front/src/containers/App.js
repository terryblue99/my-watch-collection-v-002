import { useState } from 'react' // https://reactjs.org/docs/hooks-overview.html'
import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import './App.css'
import LogIn from './LogIn'
import Homepage from '../components/Homepage'
import FetchWatches from './GetWatches'
import AddWatch from './AddWatch'
import EditWatch from './EditWatch'
const App = () => {

    const [loggedIn, setLoggedIn] = useState(false)

    return (
      <div className='App'>
        <BrowserRouter>
          <Switch>
              <Route exact path='/' component={Homepage} />
              <Route path='/login' component={LogIn} />
              <Route exact path='/watches' component={FetchWatches} />
              <Route exact path='/watches/new' component={AddWatch} />
              <Route path='/watches/:id' component={EditWatch} />
          </Switch> 
        </BrowserRouter>        
      </div>
    )
}

export default App
