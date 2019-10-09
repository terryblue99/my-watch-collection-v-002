import {
	GET_WATCHES,
	ADD_WATCH,
	EDIT_WATCH,
	DELETE_WATCH,
	SEARCH_WATCHES
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

		return fetch(`${API_URL}/watches/?userId=${user_id}`)
		.then(response => {
			if (response.error) {
				alert(response.error)
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
			console.log(error)
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
			type: SEARCH_WATCHES,
			payload: searchText
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