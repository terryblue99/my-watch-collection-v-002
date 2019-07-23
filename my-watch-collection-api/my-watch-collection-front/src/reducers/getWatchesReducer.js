import { LOADING_WATCHES, GET_WATCHES } from '../actions/types'

const initialState = []

export default (state = initialState, { type, payload } ) => {

	switch(type) {

		case LOADING_WATCHES: 
      alert('Loading watches')
			return state

		case GET_WATCHES:		
			if (payload) {
				return {watches: payload}}
			else return state

		default:
			return state
	}
}