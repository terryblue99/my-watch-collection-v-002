import { 
  SORT_WATCHES
} from '../actions/types'

const initialState = []

export default (state = initialState, { type, payload } ) => {

	switch(type) {
    case SORT_WATCHES:

      if (payload) {
        return {watches: payload}}
      else return state
    
  default:
      return state
	}
}