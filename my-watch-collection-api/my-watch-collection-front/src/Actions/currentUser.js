import {
  SET_CURRENT_USER,
  CLEAR_CURRENT_USER,
  CLEAR_WATCHES
} from './types'

const API_URL = '/api/v2'

export const logInAction = (credentials) => {
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

export const signUpAction = (credentials) => {
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
          return
        } else {
          alert('Email has already been taken, please retry!') 
        }
      })
      .catch(error => {
        console.log('Sign Up error: ', error)
      })
  }
}

export const logOutAction = () => {
  return dispatch => {
    return fetch(`${API_URL}/logout`, {
      credentials: "include",
      method: "DELETE"
    })
    .then(dispatch({type: CLEAR_CURRENT_USER}))
    .then(dispatch({type: CLEAR_WATCHES}))
    .catch(error => {
      console.log('Log out error: ', error)
    })
  }
}

export const editProfileAction = (formData) => {
  return dispatch => {
    return fetch(`${API_URL}/update`, {
      method: 'PATCH',
      body: formData
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
            alert('The profile has been updated and saved')
        }
      } else {
        alert(response.error) 
      }
    })
    .catch(error => {
      console.log(error)
    })
  }

}

