//null 병합

let var1;
let var2 = 10;

let var3 = var1 ?? var2; // null이나 언디파인이 아닌거 들어감
console.log(var3); //10
// 둘다 null 이나 언디파인이 아니면 첫번째거

let var4 = null;
let var6;
let var7 = var6 ?? var4; // null 이 나옴
console.log(var7);

//typeof
let var10;
var10 = typeof var7;

//3항
let res = var2 % 2 === 0 ? "작수" : "홀수";
