var path = require('path');
var koa=require('koa');
//var koaBody   = require('koa-body');
//var parse = require('co-busboy');
var koaStatic=require('koa-static');
//var request = require('request');
var app = koa();
//var fs=require('fs');

app.use(koaStatic(path.join(__dirname, 'build')));
//
//var proxy=require('koa-g-proxy')(app);
//
//var isStatic=false;
//
//app.use(function* (next) {
//
//    if(isStatic){
//        yield next;
//    }
//    // the body isn't multipart, so busboy can't parse it
//    if (!this.request.is('multipart/*')) return yield next;
//
//    var parts = parse(this);
//    var part;
//    var body={};
//    while (part = yield parts) {
//        if (part.length) {
//            // arrays are busboy fields
//            body[part[0]]=part[1];
//            //console.log('key: ' + part[0]);
//            //console.log('value: ' + part[1]);
//        } else {
//            // otherwise, it's a stream
//            part.pipe(fs.createWriteStream('some file.txt'))
//        }
//    }
//    //console.log(body);
//    this.request.body=body;
//    yield next;
//    //console.log('and we are done parsing the form!')
//});
//
////var host='http://case.h5tu.com';
//var host='http://sport-activity.mi-ae.cn';
//app.use(function *(){
//
//    if(isStatic){
//        yield next;
//    }
//    function requestType(url,type){
//        type=type || 'image';
//        url=url.split('?')[0];
//        switch (type){
//            case 'image':return /\.(jpg|png|gif|jpeg|ico|icon)$/i.test(url);break;
//            case 'file':return /\.(js|json|css|less|sass|pdf|mp3|mp4)$/i.test(url);break;
//        }
//    }
//    if(this.request.method=='POST'){
//        this.body=yield p({url:this.request.url,body:this.request.body});
//    }else if(!requestType(this.request.url,'image') && !requestType(this.request.url,'file')){
//        this.body=yield g({url:this.request.url,body:this.request.body});
//    }
//    function p(param){
//        return function(callback){
//            if(param.body.httpDataFormat && param.body.httpDataFormat.toLowerCase()=='json'){
//                if(param.body.phone){
//                    param.body.phone=param.body.phone.toString();
//                }
//                param.body=JSON.stringify(param.body);
//                console.log(param.body);
//            }
//            request.post({url:host+param.url, form: param.body,headers: param.body}, function(err,response,body){
//                console.log(param.url+':'+body);
//                callback(null,body);
//            })
//        }
//    }
//    function g(param){
//        return function(callback){
//            console.log(param.body);
//            request({url:host+param.url.split('?')[0],qs:param.body,method:'GET',headers: param.body}, function (error, response, body) {
//                callback(null,body);
//            });
//
//            //var stream = request('http://case.h5tu.com/h5/carShow/preview.jpg').pipe(
//            //    fs.createWriteStream('image/preview.jpg')
//            //);
//            //stream.on('finish', function () {
//            //    callback(stream);
//            //});
//            //request('http://case.h5tu.com/h5/carShow/preview.jpg', function (error, response, body) {
//            //    console.log(body);
//            //    callback(null,fs.createWriteStream('doodle.png'));
//            //});
//        }
//    }
//    //console.log(request.post('http://mxdg.3dbizhi.com/mxdg/pro/income/income.php?type=e&cb=123&data=').form({}));
//    //console.log(this.request);
//    //console.log(this.request.body);
//    //console.log(this.is('application/x-www-form-urlencoded'));
//    //console.log(this.is('application/json'));
//    //console.log(this.is('text/plain'));
//    //this.body=this.request.body;
//});


//var router = require('koa-router')();
//
//app.use(router.routes());
var server = app.listen(80);

module.exports = app;