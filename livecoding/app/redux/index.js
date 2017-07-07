import { 
    createStore,
    applyMiddleware
} from 'redux'

import rooReducers from './reducers'

import thunk from 'redux-thunk'

const middlewares = applyMiddleware(thunk)

const store = createStore(
    rooReducers,
    middlewares
)

export default store