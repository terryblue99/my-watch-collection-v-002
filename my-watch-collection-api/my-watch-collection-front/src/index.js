import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger' // https://www.npmjs.com/package/redux-logger
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import './index.css'
import './semantic/dist/semantic.min.css'
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import * as serviceWorker from './serviceWorker'
import App from './components/App'

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, createLogger())
)

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
