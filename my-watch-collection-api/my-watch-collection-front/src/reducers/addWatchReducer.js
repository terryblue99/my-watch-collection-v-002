import { ADD_WATCH } from '../actions/types'

const initialState = []

export default (state = initialState, { type, payload } ) => {

	switch(type) {

		case ADD_WATCH:	
			if (payload) {
				return state.concat(payload)	
			}
			else return state
			
		default:
			return state
	}
}