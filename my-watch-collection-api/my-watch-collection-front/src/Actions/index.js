
const API_URL = 'api/v1'

const fetchWatches = () => {
	// Thunk middleware knows how to handle functions.
	// It passes the dispatch method as an argument to the function,
	// thus making it able to dispatch actions itself.
	return dispatch => {
		// First dispatch: the app state is updated to inform
    	// that data is loading
        // dispatch({type: 'LOADING_WATCHES'})
        
		return fetch(`${API_URL}/watches`)
				.then(response => {
					return response.json()
				})
				.then(responseJSON => {
					responseJSON.sort(sortFunc) 
					console.log('*** Sorted responseJSON: ', responseJSON)
					// Update the app state with the results of the API call
					dispatch({ type: 'FETCH_WATCHES', payload: responseJSON })
				})
				.catch(error => {
					alert('An error occurred: ', error)
				})
	}
}

const sortFunc = (a, b) => {
    if (a.watch_maker < b.watch_maker) return -1
    else if (a.watch_maker > b.watch_maker) return 1
    else {
			if (a.watch_name < b.watch_name) return -1
			else if (a.watch_name > b.watch_name) return 1   
    	}
    return 0
}

export default fetchWatches
