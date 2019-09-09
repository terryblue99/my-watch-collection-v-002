import {
	GET_WATCHES,
	ADD_WATCH,
	EDIT_WATCH,
	DELETE_WATCH
} from './types'

const API_URL = '/api/v2'

export const getWatchesAction = (user_id) => {

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

		return fetch(`${API_URL}/watches/?userId=${user_id}`)
		.then(response => {
			if (response.error) {
				alert(response.error)
			} else {
				return response.json()
			}
		})
		.then(response => {
			response.sort(sortFunc)
			// Update the app state with the results of the API call
			dispatch({
				type: GET_WATCHES,
				payload: response
			})	
		})
		.catch(error => {
			console.log(error)
		})
	}
}

export const addWatchAction = (formData, watch) => {
	return dispatch => {
		return fetch(`${API_URL}/watches`, {
			method: 'POST',
			body: formData
		})
		.then(response => {
			if (response.error) {
				alert(response.error)
			} else {
					dispatch({
							type: ADD_WATCH,
							payload: watch
					})
				}
		})
		.then(alert('The watch has been added and saved'))
		.catch(error => {
			console.log(error)
		})
	}
}

export const editWatchAction = (formData, watch) => {
	return dispatch => {
		return fetch(`${API_URL}/watches/${watch.id}`, {
			method: 'PATCH',
			body: formData
		})
		.then(
			dispatch({
					type: EDIT_WATCH,
					payload: watch
			})
		)
		.then(alert('The watch has been edited and saved'))
		.catch(error => {
			console.log(error)
		})
	}
}

export const deleteWatchAction = (id, watchName) => {
	return dispatch => {
		return fetch(`${API_URL}/watches/${id}`, {
				method: 'DELETE'
		})
		.then(alert(watchName + ': has been deleted'))
		.then(
			dispatch({
				type: DELETE_WATCH,
				payload: id
			})		
		)
		.catch(error => {
			console.log(error)
		})
	}
}
