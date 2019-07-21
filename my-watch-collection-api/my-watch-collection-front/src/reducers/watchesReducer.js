import { LOADING_WATCHES, GET_WATCHES, ADD_WATCH, EDIT_WATCH, DELETE_WATCH } from '../actions/types'

export default (state = [], { type, payload } ) => {

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
					const watch = Object.assign({}, payload, {id: state.length + 1} )
					return [...state, watch]
			}
			else return state
			
		default:
			return state
	}
}
