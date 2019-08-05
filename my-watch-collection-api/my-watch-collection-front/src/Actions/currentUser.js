import {
  SET_CURRENT_USER
} from './types'

// import { getWatchesAction } from './watches'

const API_URL = '/api/v1'

export const login = (credentials) => {
  console.log('*** actions login credentials: ', JSON.stringify(credentials))
  return dispatch => {
    return fetch(`${API_URL}/login`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then(response => {
        console.log('*** actions 1 login response.data: ', response.data)
        if (response.error) {
          if (response.status === 401) {
            alert('Email not found, please retry!')
          } else {
            alert(response.error)
          }
        } else {
          return response.json()
        }
      })
      .then(response => {
        console.log('*** actions 2 login response.data: ', response.data)
        if (response.error) {
          alert(response.error)
        } else {
          dispatch({
            type: SET_CURRENT_USER,
             Payload: response.data
          })
          // dispatch(getWatchesAction(response.data.user.id))
          // history.push('/')
        }
      })
      .catch(console.log)
  }
}