var os = require("os"); /*const나오면 상수다*/

console.log(os.hostname());
console.log(os.freemem());

console.log(">>>>>>>>>>>>>>>>>>>>>>>");

var path = require("path");
var str = path.join("/Users/admin","all.exe");  /*조합해서 하나의 문자열로 만들어줌*/
console.log(str);

console.log(path.sep);  /*파일구분자*/

console.log(path.dirname(str));
console.log(path.basename(str));
console.log(path.extname(str));    /*ext : 확장자 */

/*자바스크립트에서 객체:중괄호*/
console.log(path.parse(str));  /*객체형태로 나온다.  ->path.parse().base 이렇게 접근 가능 */