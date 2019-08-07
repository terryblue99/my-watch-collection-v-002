import {
  SET_CURRENT_USER
} from './types'

const API_URL = '/api/v1'

export const login = (credentials) => {
  return dispatch => {
    return fetch(`${API_URL}/sessions`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then(response => {
        if (response.error) {
            alert(response.error)
        } else {
          return response.json()
        }
      })
      .then(response => {
        if (!response.error) {
          if (response.status === 401) {
            alert('Account not found, please retry!')
            return
          } else {
            dispatch({
              type: SET_CURRENT_USER,
              payload: response
            })
            return
          }   
        } else {
          alert(response.error) 
        }
      })
      .catch(error => {
        console.log('Log In error: ', error)
      })
  }
}

export const signup = (credentials, history) => {
  console.log('*** actions/currentUser/signup credentials: ', credentials)
  return dispatch => {
    return fetch(`${API_URL}/registrations`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then(response => {
        if (response.error) {
          if (response.status === 500) {
            alert('Account not created, please retry!')
          } else {
            alert(response.error)
          }
        } else {
          return response.json()
        }
      })
      .then(response => {
        if (!response.error) {
          dispatch({
            type: SET_CURRENT_USER,
            payload: response
          })
        } else {
          alert(response.error) 
        }
      })
      .catch(error => {
        console.log('Sign Up error: ', error)
      })
  }
}