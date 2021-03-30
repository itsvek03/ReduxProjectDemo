import { FETCH_BOOK_SUCCESS } from './BookConstant'
import { books } from '../books'


export const fetchbooks = () => {
    console.log(books)
    return async (dispatch) => {
        dispatch({
            type: FETCH_BOOK_SUCCESS,
            payload: books
        })
    }
}

