import { combineReducers } from 'redux'
import bookReducer from '../reducers/BookReducer'

const reducer = combineReducers({
    bookReducer: bookReducer
})

export default reducer;