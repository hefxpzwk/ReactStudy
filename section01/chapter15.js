//객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; //객체 리터럴(대부분사용

//객체 프로퍼티 객체 속성 key : value (value 에는 아무거나 가능)
let person = {
  name: "이그니", // 객체 속성/프로퍼티
  age: 123, //객체 속성/프로퍼티
  hobby: "스키비디붐", //객체 속성/프로퍼티
  10: 20, //숫자도 key 가능
  "like cat": true, // 띠어쓰기 는 묵기
};

//프로퍼티 접근 (점 표기, 괄호 표기)
//존재하지 않는거 접근하면 엉디파인 발생
let name = person.name; //점표기
console.log(name);

let age = person["age"]; //무조건 "" 이거 붙여야함
let temp = "hobby";
let hobby = person[temp]; //여기 변수넣어서 가능 그래서 동적인 경우에는 괄호표기쓰셈
console.log(age);
console.log(hobby); //이거 가능

//프로퍼티 추가/수정 이런식으로 그냥하셈
person.job = "fcs";
person["girfriend"] = false;
console.log(person);

//삭제
delete person.job;
delete person["girfried"];

//존재 유무 확인
let result1 = "name" in person;
let result2 = "cat" in person;
