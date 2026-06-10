//단락평가
function f1() {
  console.log("print false, this is f1");
  return false;
}
function f2() {
  console.log("print true, this is f2");
  return true;
}

//앞만 봐도 평가 끝남
let v1 = f1() && f2(); //f2 실행 안됨
let v2 = f2() || f1(); //f1 실행 안됨

//단락평가활용
function printName(person) {
  const name = person && person.name;
  console.log(name || "person 갑시 없음");
}

printName({
  name: "이거니",
});
printName();
