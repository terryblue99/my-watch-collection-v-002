import {
	GET_WATCHES,
	SORT_WATCHES,
	ADD_WATCH,
	EDIT_WATCH,
	DELETE_WATCH
} from './types'

const API_URL = '/api/v2'

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
			// Load the underscore library
			const _ = require('underscore')
			// Load the watch objects into an array
			let arrWatches = []
			for (let i = 0; i < response.length; i++) {
					arrWatches.push(response[i])
			}
			// Sort the watches by watch name within watch maker
			// for the initial display of the dashboard screen
			const sortedWatches = _.chain(arrWatches)
				.sortBy('watch_name')
				.sortBy('watch_maker')
				.value()
			// Update app states with the result
			dispatch({
				type: GET_WATCHES, 
				payload: sortedWatches
			})
			// The below will be used by the user for selecting other sort orders
			dispatch({
				type: SORT_WATCHES,
				payload: sortedWatches
			})
		})
		.catch(error => {
			console.log(error)
		})
	}
}

export const sortWatchesAction = (sortedWatches) => {
	return {
		type: SORT_WATCHES,
		sortedWatches
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
