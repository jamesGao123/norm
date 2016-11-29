export function addUser(user) {
    return (dispatch, getState) => {
        return dispatch({type:'USER_ADD',user:user});
    }
}

export function deleteUser(user){
    return (dispatch,getState)=>{
        return dispatch({type:'USER_DELETE',user:user});
    }
}
