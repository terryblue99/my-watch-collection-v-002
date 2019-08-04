import {
  SET_CURRENT_USER
} from './types'

const API_URL = '/api/v1'

export const login = (credentials) => {
  console.log('*** actions login credentials: ', credentials)
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
        console.log('*** actions login response.data: ', response.data)
        if (response.error) {
          alert(response.error)
        } else {
          return response.json()
        }
      })
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch({
            type: SET_CURRENT_USER,
             Payload: response.data
          })
          // dispatch(getMyWatches())
          // history.push('/')
        }
      })
      .catch(console.log)
  }
}