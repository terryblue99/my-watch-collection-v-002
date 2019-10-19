import { SET_CURRENT_USER, CLEAR_CURRENT_USER } from '../actions/types'

const initialState = {}

export default (state = initialState, { type, payload }) => {

  switch (type) { 

    case SET_CURRENT_USER:
      if (payload) {     
        return payload
      } else return state

    case CLEAR_CURRENT_USER:
      return initialState
      
    default:
      return state
  }
}