import {
	GET_WATCHES,
	ADD_WATCH,
	DELETE_WATCH,
	SEARCH_WATCHES,
	RESET_WATCHES
} from './types'
// The underscore library
import _ from 'lodash'

const API_URL = '/api/v2'
let sortedWatches

export const getWatchesAction = (user_id) => {
	// Thunk middleware knows how to handle functions.
	// It passes the dispatch method as an argument to the function,
	// thus making it able to dispatch actions itself.
	return dispatch => {

		return fetch(`${API_URL}/watches/?user_id=${user_id}`)
		.then(response => {
			if (response.error) {
				alert('*** getWatchesAction ERROR 1: ' + response.error)
			} else {
				return response.json()
			}
		})
		.then(response => {
			// Sort the watches using the underscore functions _.chain & _.sortBy
			// Sort by watch name within watch maker for the initial dashboard screen
			sortedWatches = _.chain(response)
				.sortBy('watch_name')
				.sortBy('watch_maker')
				.value()
			// Update watch states with the sorted result
			dispatch({
				type: GET_WATCHES, 
				payload: sortedWatches
			})
		})
		.catch(error => {
			console.log('*** getWatchesAction ERROR 2: ' + error)
		})
	}
}

export const sortWatchesAction = (sortKey) => {
	return dispatch => {
		dispatch({
			type: sortKey
		})
	}		
}

export const searchWatchesAction = (searchText) => {
	return dispatch => {
		dispatch({
			type: RESET_WATCHES
		})
		
		dispatch({
			type: SEARCH_WATCHES,
			payload: searchText
		})
	}		
}

export const resetWatchesAction = () => {
	return dispatch => {
		dispatch({
			type: RESET_WATCHES
		})
	}		
}

export const addWatchAction = (formData, watch, watchRelated) => {
	alert('watchRelated: ' + watchRelated)
	return dispatch => {
		return fetch(`${API_URL}/watches`, {
			method: 'POST',
			body: formData
		})
		.then(response => {
			if (response.error) {
				alert('*** addWatchAction ERROR 1: ' + response.error)
			} else {
					dispatch({
							type: ADD_WATCH,
							payload: watch
					})
					if (!watchRelated) {
						alert('The watch has been added and saved')
					} else alert('The watch-related has been added and saved')
				}
		})
		.catch(error => {
			console.log('*** addWatchAction ERROR 2: ' + error)
		})
	}
}

export const editWatchAction = (formData, watch_id, watchRelated) => {
	// for(let [name, value] of formData) {
	// 	console.log(`${name} = ${value}`)
	// }
	return dispatch => {
		return fetch(`${API_URL}/watches/${watch_id}`, {
			method: 'PATCH',
			body: formData
		})
		.then(response => {
			if (response.error) {
				alert('*** editWatchAction ERROR 1: ' + response.error)
			} else {
				if (!watchRelated) {
					alert('The watch has been edited and saved')
				} else alert('The watch-related has been edited and saved')
			}
		})
		.catch(error => {
			console.log('*** editWatchAction ERROR 2: ' + error)
		})
	}
}

export const deleteWatchAction = (id, watchName) => {
	return dispatch => {
		return fetch(`${API_URL}/watches/${id}`, {
				method: 'DELETE'
		})
		.then(response => {
			if (response.error) {
				alert('*** deleteWatchAction ERROR 1: ' + response.error)
			} else {
				dispatch({
					type: DELETE_WATCH,
					payload: id
				})
				alert(watchName + ': has been deleted')
			}			
		})
		.catch(error => {
			console.log('*** deleteWatchAction ERROR 2: ' + error)
		})
	}
}
