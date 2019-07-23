import { ADD_WATCH } from '../actions/types'

const initialState = {
	watch: []
}

export default (state = initialState, { type, payload } ) => {

	switch(type) {

		case ADD_WATCH:	
			if (payload) {
				console.log('+++++ADD_WATCH payload: ', payload)
				// const watch = Object.assign({}, payload )
				// return [{
				// 	...state,
				// 	watch: payload
				// }]
				return {
					...state, 
					watch: payload
			  }
				
			}
			else return state
			
		default:
			return state
	}
}