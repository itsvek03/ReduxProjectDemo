import * as ACTION_TYPES from '../actions/BookConstant'

const initialState = {
    books: [],
    error: null,
    isloading: false
}

const bookReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case ACTION_TYPES.FETCH_BOOK_SUCCESS:
            return {
                ...state,
                books: action.payload
            }
        default:
            return state;
    }
}

export default bookReducer;

