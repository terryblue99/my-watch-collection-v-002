import { DELETE_WATCH } from '../actions/types'

const initialState = []

export default (state = initialState, { type, payload } ) => {

	switch(type) {

		case DELETE_WATCH:	
			if (payload) {
				console.log('deleteWatchReducer payload: ', payload)
				return state.filter(watch => watch.id !== payload.id)
			}
			else return state
			
		default:
			return state
  }
}