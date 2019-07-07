import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import WatchesHome from './components/WatchesHome'

export default(
    <Route exact path='/' component={App}>
        <IndexRoute component={WatchesHome} />
    </Route>
)
