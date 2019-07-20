import { LOADING_WATCHES, GET_WATCHES, ADD_WATCH, EDIT_WATCH, DELETE_WATCH } from '../actions/types'

const initialState = {watches: []}

function watchesReducer(state = initialState, { type, payload } ) {

	switch(type) {

		case LOADING_WATCHES: 

            alert('Loading watches')
			break

		case GET_WATCHES:
				
			if (payload) {
				
				return {
				 	...state, watches: payload  
				}
			}
			else return state

		case ADD_WATCH:
				
			if (payload) {
				
				return {
					...state, watches: payload
				}
			}
			
		default:
			return state
	}
}

export default watchesReducer
