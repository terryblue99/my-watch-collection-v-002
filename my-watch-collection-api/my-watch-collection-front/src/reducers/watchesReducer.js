const initialState = {watches: []}

function watchesReducer(state = [], action) {

	switch(action.type) {

		case 'LOADING_WATCHES': 
            alert('Loading watches')

		case 'ADD_WATCHES':
			console.log('*** action.payload 1', action.payload)
			if (action.payload) {
				console.log('*** action.payload 2', ...state.concat(action.payload))
				return {
				 ...state, watches: [...state, ...action.payload]  
				}
			}
			else return state
			
		default:
			return state
	}
}

export default watchesReducer
