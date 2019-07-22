import { LOADING_WATCHES, GET_WATCHES, ADD_WATCH, EDIT_WATCH, DELETE_WATCH } from './types'

const API_URL = '/api/v1'

export const getWatchesAction = () => {

	const sortFunc = (a, b) => {
		if (a.watch_maker < b.watch_maker) return -1
		else if (a.watch_maker > b.watch_maker) return 1
		else {
				if (a.watch_name < b.watch_name) return -1
				else if (a.watch_name > b.watch_name) return 1   
			}
		return 0
	}
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
				// Update the app state with the results of the API call
				dispatch({ type: GET_WATCHES, payload: responseJSON })
			})
			.catch(error => {
				alert('An error occurred: ', error)
			})
	}
}

// export const addWatchAction = (watch) => {
// 	return (dispatch) => {
// 		dispatch({
// 			type: ADD_WATCH,
// 			watch
// 		})
		
// 	}
// }

export const addWatchAction = (watch) => {
	console.log('@@**@@ watch: ', watch)
	return dispatch => {      
		return fetch(`${API_URL}/watches`, {
			method: 'post',
			body: JSON.stringify(watch),
			headers: {
				'Content-Type': 'application/json'
			},	
		})
			.then(response => {
					return response.json().then(console.log('$$$ response.json:', response))
			})
			.then(responseJSON => {
			// Update the app state with the results of the API call
			console.log('&&& responseJSON: ', responseJSON)
			// return dispatch({ type: ADD_WATCH, payload: responseJSON })
			})
			.catch(error => {
				console.log('!!!!! An error occurred: ', error)
			})
	}
}
