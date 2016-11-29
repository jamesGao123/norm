import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import api from '../middleware/api'
import api1 from '../middleware/api1'
import rootReducer from '../reducers'

export default function configureStore(preloadedState) {
  return createStore(
      rootReducer,
      preloadedState,
      applyMiddleware(thunk,api,api1)
  )
}
