var express = require("express");  /*const로 사용하는 경우도 있다. const는 값이 안바뀜 */

var static = require("serve-static");  /*static이라는 미들웨어 사용 post위해서~ , public 인식시키기*/
var path = require("path");
var bodyParser = require("body-parser"); /*body-parser도 외부 모듈이다. express 받으면 node_modules 생김 그안에 들어있음 */

var app = express();

app.use(static(path.join(__dirname,"public")));  /*static이라는 미들웨어 사용 post위해서~ 3개 정의 */
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



app.use(function(req,res,next){  /*미들웨어 사용시 use 함수 사용. 미들웨어안에는 next가 있을 수도 없을 수도!! next없으면 진행끝*/
    console.log("1st middleware call");  /* http://localhost:3000/아무거나 ->log 찍힌다 */
    req.id = "haewon"; /*request에 데이터 바인딩 가능/ 이것과 파라미터는 다른것! */
    next();
});

app.listen(3000, function(){  /*서버실행*/
    console.log("서버실행");    
});  

app.use("/user/login",function(req,res,next){
    console.log("1,2사이");
    next();
});

app.use(function(req,res,next){
    console.log("2nd middleware call", req.id);
    next();
});

/*pathvariable   :   스프링에서는 중괄호 */
app.use("/test/:id",function(req,res,next){ 
    console.log("3rd middleware call");
    var id = req.params.id;
    console.log(id);
    /*res.send(id);   화면에 보여줄때 . 하나만 먹힌다. 미들웨어에서는 화면에 데이터 출력 안한다!! */
    next();
});  

/* get방식으로 파라미터 넘어옴*/
app.use(function(req,res,next){  
    console.log("4th middleware call"); 
    var pw = req.query.pw;
    console.log(pw);
    next();
});

/*post방식*/
app.use(function(req,res,next){
    console.log("5th middleware call");
    var id = req.body.id;
    res.send(id);
});

