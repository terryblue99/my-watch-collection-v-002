import _ from 'lodash'
import { 
	GET_WATCHES, 
	ADD_WATCH, 
	DELETE_WATCH,
	CLEAR_WATCHES,
	SEARCH_WATCHES,
	RESET_WATCHES,
	WATCH_MAKER_SORT,
	WATCH_NAME_SORT,
	NEWEST_TO_OLDEST_SORT,
	OLDEST_TO_NEWEST_SORT,
	COST_LOW_TO_HIGH_SORT,
	COST_HIGH_TO_LOW_SORT
} from '../actions/types'

const initialState = {
	savedWatches: [],
	nonWatch: ['non-watch'] // Used when creating records that are not related to a specific watch.
													// For those records user must add 'non-watch' anywhere in the notes input.
}
let sortedWatches

// Used when sorting watches by cost,
// converting it to a floating point number
const costToNumber = (watch) => {
	if (watch.cost) {
		return parseFloat(watch.cost)
	} else return 0.00
}

export default (state = initialState, { type, payload } ) => {

	switch(type) {

		// UPDATE WATCHES

		case GET_WATCHES:		
			if (payload) {
				return ({
					...state,
					watches: payload,
					savedWatches: payload,
					nonWatch: state.nonWatch
				})
			} else return state

		case RESET_WATCHES:		
			return ({
				...state,
				watches: state.savedWatches
			})

		case ADD_WATCH:
			if (payload) {
				return ({
					...state,
					state: state.watches.concat(payload)
				}) 	
			}
			else return state

		case DELETE_WATCH:
				return ({
					...state,
					watches: state.watches.filter(watch => watch.id !== payload),
					savedWatches: state.savedWatches.filter(watch => watch.id !== payload)
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
				watches: state.watches.filter(watch => {
					searchArray = []
					searchArray.push( watch.watch_name.toLowerCase(),
														watch.watch_maker.toLowerCase(),
														watch.movement.toLowerCase(),
														watch.complications.toLowerCase(),
														watch.band.toLowerCase(),
														watch.model_number.toLowerCase(),
														watch.case_measurement.toLowerCase(),
														watch.water_resistance.toLowerCase(),
														watch.date_bought.toLowerCase(),
														watch.cost,
														watch.notes.toLowerCase()
													)
					// check array of watch string fields for searchText string/substring
					return searchArray.some(watchStringField => watchStringField.includes(searchText))
				})
			})
		
		// SORT WATCHES

		case WATCH_MAKER_SORT: // sort by watch_name within watch_maker
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
			sortedWatches = _.sortBy( state.watches, costToNumber )
			return ({
				...state,
				watches: sortedWatches
			})

		case	COST_HIGH_TO_LOW_SORT:
			sortedWatches = _.sortBy( state.watches, costToNumber)
			return ({
				...state,
				watches: sortedWatches.reverse()
			})

		// DEFAULT STATE

		default:
			return state
	}
}
