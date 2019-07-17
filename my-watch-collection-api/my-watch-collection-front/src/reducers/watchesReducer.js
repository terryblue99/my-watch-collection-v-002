const initialState = {watches: []}

function watchesReducer(state = initialState, action) {

	switch(action.type) {

		case 'LOADING_WATCHES': 
            alert('Loading watches')

		case 'FETCH_WATCHES':
			// console.log('*** action.payload', action.payload)
			
			if (action.payload) {
				
				return {
				 	...state, watches: action.payload  
				}
			}
			else return state
			
		default:
			return state
	}
}

export default watchesReducer
