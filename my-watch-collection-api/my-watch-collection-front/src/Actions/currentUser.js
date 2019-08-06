import {
  SET_CURRENT_USER
} from './types'

import { getWatchesAction } from './watches'

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
        if (!response.error) {
          dispatch({
            type: SET_CURRENT_USER,
            payload: response
          })
          dispatch(getWatchesAction(response.user.id))
        } else {
          alert(response.error) 
        }
      })
      .catch(console.log)
  }
}