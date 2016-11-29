import merge from 'lodash/merge'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

var userKey=0;
function users(state=[] , action) {
  console.log(1);
  switch (action.type){
    case 'USER_ADD':action.user.key=userKey++;state.push(action.user);break;
    case 'USER_DELETE':state=state.filter(t=>t.key!==action.user.key);break;
  }
  return state;
}

function record(state={},action){
  console.log(2);
  switch (action.type){
    case 'RECORD_GET':console.log(action);break;
  }
  return state;
}

const rootReducer = combineReducers({
  users,
  record,
  routing
})

export default rootReducer
