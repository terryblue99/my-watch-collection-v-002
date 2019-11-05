import {
  SET_CURRENT_USER,
  CLEAR_CURRENT_USER,
  CLEAR_WATCHES,
  DELETE_USER
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
            alert('*** Log In Error: ' + response.error)
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
          alert('*** Log In Error: ' + response.error) 
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
            alert('*** Sign Up Error: ' + response.error)
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
        console.log('*** Sign Up Error: ', error)
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
      console.log('*** Log out Error: ', error)
    })
  }
}

export const editProfileAction = (formData, user_id) => {
  return dispatch => {
    return fetch(`${API_URL}/update/${user_id}`, {
      method: 'PATCH',
      body: formData
    })
    .then(response => response.json())
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
            alert('Your profile has been updated.\nYou will need to log in again.')
            return
        }
      } else {
        alert('*** Edit Profile Error: ' + response.error) 
      }
    })
    .catch(error => {
      console.log('*** Edit Profile Error: ' + error)
    })
  }
}

export const deleteUserAction = (user_id) => {
	return dispatch => {
		return fetch(`${API_URL}/registrations/${user_id}`, {
				method: 'DELETE'
		})
		.then(response => {
			if (response.error) {
				alert('*** ERROR: ' + response.error)
			} else {
				dispatch({
					type: DELETE_USER
				})
        alert('Your account has been successfully deleted. Hope to see you again soon.')
			}			
		})
		.catch(error => {
			console.log('*** ERROR: ' + error)
		})
	}
}
