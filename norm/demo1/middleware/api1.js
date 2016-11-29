import { Schema, arrayOf, normalize } from 'normalizr'
import { camelizeKeys } from 'humps'

export default store => next => action => {
    console.log(456);
    //store.dispatch(action);

    next(action);
    //action(store.dispatch, store.getState)
}