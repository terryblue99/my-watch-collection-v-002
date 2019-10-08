import _ from 'lodash'
import { 
	GET_WATCHES, 
	ADD_WATCH, 
	EDIT_WATCH, 
	DELETE_WATCH,
	CLEAR_WATCHES,
	SEARCH_WATCHES,
	WATCH_MAKER_SORT,
	WATCH_NAME_SORT,
	NEWEST_TO_OLDEST_SORT,
	OLDEST_TO_NEWEST_SORT,
	COST_LOW_TO_HIGH_SORT,
	COST_HIGH_TO_LOW_SORT
} from '../actions/types'

const initialState = {searhResult: []}
let sortedWatches

// Convert cost into a number with decimal points
// Used when sorting watches by cost
const costToNumber = (watch) => {
	return parseFloat(watch.cost)
}

export default (state = initialState, { type, payload } ) => {

	switch(type) {

		// UPDATE WATCHES

		case GET_WATCHES:		
			if (payload) {
				return {watches: payload}}
			else return state

		case ADD_WATCH:
			if (payload) {
				return state.watches.concat(payload)	
			}
			else return state

		case EDIT_WATCH:
			if (payload) {
				state.watches.map(watch => watch.id === payload.id ? payload : watch)
				return state
			}
			else return state

		case DELETE_WATCH:
				return ({
					...state,
					watches: state.watches.filter(watch => watch.id !== payload)
				})

		case CLEAR_WATCHES:
				state = initialState
				return state

		// SEARCH WATCHES

		case SEARCH_WATCHES:
			let searchArray
			const searchText = payload.toLowerCase()
			return ({
				...state,
				searchResult: state.watches.filter(watch => {
					searchArray = []
					searchArray.push(watch.watch_name.toLowerCase())
					searchArray.push(watch.watch_maker.toLowerCase())
					searchArray.push(watch.movement.toLowerCase())
					searchArray.push(watch.complications.toLowerCase())
					searchArray.push(watch.band.toLowerCase())
					searchArray.push(watch.model_number.toLowerCase())
					searchArray.push(watch.case_measurement.toLowerCase())
					searchArray.push(watch.water_resistance.toLowerCase())
					searchArray.push(watch.date_bought.toLowerCase())
					searchArray.push(watch.cost.toLowerCase())
					// check array of watch string fields for searchText string/substring
					return searchArray.some(watchStringField => watchStringField.includes(searchText))
				})
			})
		
		// SORT WATCHES

		case WATCH_MAKER_SORT:
			sortedWatches = _.chain( state.watches )
			.sortBy('watch_name')
			.sortBy('watch_maker')
			.value()
			return ({
				...state,
				watches: sortedWatches
			})
	
		case WATCH_NAME_SORT:
			sortedWatches = _.sortBy( state.watches, 'watch_name' )
			return ({
				...state,
				watches: sortedWatches
			})

		case	NEWEST_TO_OLDEST_SORT:
			sortedWatches = _.sortBy( state.watches, 'date_bought' )
			return ({
				...state,
				watches: sortedWatches.reverse()
			})

		case	OLDEST_TO_NEWEST_SORT:
			sortedWatches = _.sortBy( state.watches, 'date_bought' )
			return ({
				...state,
				watches: sortedWatches
			})

		case	COST_LOW_TO_HIGH_SORT:
			// Execute a custom function to convert cost to a number
			sortedWatches = _.sortBy( state.watches, costToNumber )
			return ({
				...state,
				watches: sortedWatches
			})

		case	COST_HIGH_TO_LOW_SORT:
			// Execute a custom function to convert cost to a number
			sortedWatches = _.sortBy( state.watches, costToNumber )
			return ({
				...state,
				watches: sortedWatches.reverse()
			})

		// DEFAULT STATE

		default:
			return state
	}
}
