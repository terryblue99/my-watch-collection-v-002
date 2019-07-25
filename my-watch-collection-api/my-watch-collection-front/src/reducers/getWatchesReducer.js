import { LOADING_WATCHES, GET_WATCHES, DELETE_WATCH } from '../actions/types'

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

		case DELETE_WATCH:
				return ({
					...state,
					watches: state.watches.filter(watch => watch.id !== payload)
				})

		default:
			return state
	}
}