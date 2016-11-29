import { Schema, arrayOf, normalize } from 'normalizr'
import { camelizeKeys } from 'humps'
//import 'isomorphic-fetch'
import 'whatwg-fetch'

const getThenShow = () => {
    const url = 'http://a4.h5tu.com/record.php?method=down&ct=h5tu';
    var headers = new Headers();
    headers.append('Accept', 'application/json');
    var request = new Request(url, {headers: headers,body:{a:1,b:2},method:'POST',cache: "no-store"});

    return fetch(request).then(response =>response.json()).then(json => {return { type:'RECORD_GET',message:json};});
};

function* generatorTest(){
    const url = 'http://a4.h5tu.com/record.php?method=down&ct=h5tu';
    var headers = new Headers();
    headers.append('Accept', 'application/json');
    var request = new Request(url, {headers: headers,body:{a:1,b:2},method:'POST',cache: "no-store"});
    console.log('go1');
    yield fetch(request).then(response =>response.json()).then(json => {return { type:'RECORD_GET',message:json};});
    yield setTimeout(()=>{
        console.log(123213);
    },1000);
    console.log('go2');
}

export default store => next => action => {
    console.log(123);
    console.log(action);
    let gen=generatorTest();
    gen.next().value.then(res=>{console.log(1234567831232131);gen.next();gen.next();gen.next();});
    console.log('go3');
    //gen.next();
    if(typeof action==='function'){
        store.dispatch(getThenShow);
    }
    if(action.type==='USER_ADD'){
        getThenShow().then(response=>{return next(response);});
    }
    console.log(9999);
    next(action);
    //next(action);
    //action(store.dispatch, store.getState)
    //console.log('store',store);
    //console.log('next',next);
    //console.log('action',action);
}