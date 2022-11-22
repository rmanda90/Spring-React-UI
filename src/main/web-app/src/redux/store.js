import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './redusers'

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunkMiddleware)
))

export default store;