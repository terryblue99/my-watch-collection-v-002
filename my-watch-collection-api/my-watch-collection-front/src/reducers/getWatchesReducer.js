import { LOADING_WATCHES, GET_WATCHES } from '../actions/types'

const initialState = {
	watches: []
}

export default (state = initialState, { type, payload } ) => {

	switch(type) {

		case LOADING_WATCHES: 
      alert('Loading watches')
			break

		case GET_WATCHES:
				
			if (payload) {
				console.log('*** GET_WATCHES: ', payload)
				return {
					 ...state, 
					 watches: payload
				}
			}
			else return state

		default:
			return state
	}
}