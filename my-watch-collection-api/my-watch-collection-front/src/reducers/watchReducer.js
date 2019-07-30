import { 
	LOADING_WATCHES, 
	GET_WATCHES, 
	ADD_WATCH, 
	EDIT_WATCH, 
	DELETE_WATCH 
} from '../actions/types'

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

		case ADD_WATCH:
			if (payload) {
				return state.watches.concat(payload)	
			}
			else return state

		case EDIT_WATCH:
			if (payload) {
				state.watches.map(watch => watch.id === payload.id ? payload : watch)
				return state
			}
			else return state

		case DELETE_WATCH:
				return ({
					...state,
					watches: state.watches.filter(watch => watch.id !== payload)
				})

		default:
			return state
	}
}