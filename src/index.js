import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducer from './stores/index'
import { BrowserRouter } from 'react-router-dom'

const initialState = {}
const store = createStore(
    reducer,
    initialState,
    applyMiddleware(thunk)
)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>

    </Provider>, document.getElementById('root'));


