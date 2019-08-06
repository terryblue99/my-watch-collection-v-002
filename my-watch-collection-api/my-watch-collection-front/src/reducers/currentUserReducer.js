import { SET_CURRENT_USER } from '../actions/types'

export default (state = null, { type, payload }) => {
  switch (type) {  
    case SET_CURRENT_USER:
        console.log('*** currentUserReducer payload: ', payload)
      if (payload) {
        return payload
      } else return null
    case "CLEAR_CURRENT_USER":
      return null
    default:
      return state
  }
}