/*읽어온 파일 덮어씌우기*/

var fs = require("fs");

fs.writeFile("./output.txt", "hello world 안녕",function(err){ 
    /*비동기화 이므로 콜백함수 필요  function = 미들웨어, 핸들러!!, 콜백함수/ 이름 동적으로 받으면.. 엄청난코드다. 스마트스토어~ 클라이언트도 파일만들기 가능 */
    if(err){
        console.log(err);
        return;
    }
    console.log("파일 덮어씌우기");
    
}); /* output.txt 없으면 자동으로 만들어짐*/ /*브라우저에 출력하고 싶으면 res~~~ 해야한다! */
