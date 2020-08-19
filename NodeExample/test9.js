/*파일읽어오기*/
var fs = require("fs");


console.log(1111);
var data = fs.readFileSync("./a.html","utf-8");
console.log(data);
console.log(2222);

console.log(":::::::::::::::");

console.log("aaaaaaaa");
fs.readFile("./a.html", "utf-8", function(err,data){  /*동기화. 순서 이렇게저렇게*/
    console.log("bbbbbb");
    console.log(data);
    
});
console.log("cccccccc");


