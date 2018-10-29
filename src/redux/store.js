import { applyMiddleware, createStore } from 'redux'
import reactApp from './rootReducer'
import logger from 'redux-logger'
const store = createStore(reactApp, applyMiddleware(logger))
export default store
