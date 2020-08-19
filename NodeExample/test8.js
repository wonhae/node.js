var http = require("http");

var url = require("url");

var fs = require("fs");  /*file system*/

var querystring = require("querystring");


console.log("::::::::::::::::::::::::::::::::");

var urlstr = "https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=hello";
var curUrl = url.parse(urlstr); /* parse하고나면 객체가 나온다. */
console.log(curUrl); 

var params = querystring.parse(curUrl.query);
console.log(params.query);



console.log("::::::::::::::::::::::::::::::::");
/*간단한 서버 만든다. */
http.createServer(function(req,res){
    var q = url.parse(req.url, true);
    var filename = q.pathname;
    
    
    
   fs.readFile("./"+filename, "utf-8", function(err, data){  /* __dirname+"/" 대신 "./"로 변경 */
       /*  path,utf-8,callback함수  //a.html은 callback함수중 data에 들어감/ __dirname 디렉토리 가르쳐준다*/
     
       if(err){
            res.writeHead(404,{"Content-Type":"text/html;charset=UTF-8"});
            console.log(err);
            return res.end("404 err");
        }
        console.log("data", data);
       
        res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
        res.write(data);
        return res.end(); 
       
   });
    
}).listen(3000);  /*listen 앞이 서버네임*/



