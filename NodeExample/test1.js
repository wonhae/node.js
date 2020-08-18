console.log("hello world");

console.log("숫자입니다.%d",10);

console.log("문자열입력.%s","안녕");

var obj = {
    id : '001',
    name: 'john',
    age : 15
}

console.log("JSON 객체입니다. %j", obj);

console.dir(obj);

console.log(obj);

console.time("duration");
var result = 0;
for(var i = 0; i < 10000; i ++){
    result += i;
}
console.timeEnd("duration");


console.log(__filename);
console.log(__dirname);

