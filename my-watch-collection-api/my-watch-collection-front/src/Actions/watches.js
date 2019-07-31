import {
	LOADING_WATCHES,
	GET_WATCHES,
	ADD_WATCH,
	EDIT_WATCH,
	DELETE_WATCH
} from './types'

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
		// dispatch ({type: LOADING_WATCHES})

		return fetch(`${API_URL}/watches`)
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

export const addWatchAction = (watch) => {
	return dispatch => {
		return fetch(`${API_URL}/watches`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(watch)
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

export const editWatchAction = (watch) => {
	return dispatch => {

		const sendWatchData = {
			watch_name: watch.watch_name,
			watch_maker: watch.watch_maker,
			movement: watch.movement,
			band: watch.band,
			model_number: watch.model_number,
			case_measurement: watch.case_measurement,
			water_resistance: watch.water_resistance,
			complications: watch.complications,
			date_bought: watch.date_bought,
			cost: watch.cost
		}

		return fetch(`${API_URL}/watches/${watch.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(sendWatchData)
		})
		.then(response => {
			if (response.error) {
				alert(response.error)
			} else {
				return response.json()
			}
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
		.then(window.location.href = '/watches')
		.catch(error => {
			console.log(error)
		})
	}
}