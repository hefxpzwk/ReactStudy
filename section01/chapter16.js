// 상수 객체
// 일반 객체랑 똑같은데
const animal = {
  type: "고양이",
};
// 상수로선언한거임
//추가, 수정, 삭제 다 가능함
// animal = 2; -> 이런식의 완전히 추가가 불가능하지 이 프로퍼티를 수정추가 삭제하는건 가능함

//메서드 : 개개체이 동작을 정의
//값이 함수인 프로퍼티
const person = {
  name: "이거늬",
  //메서드 선언
  sayHi() {
    console.log("hi!");
  },
  fuck: function () {
    console.log("fuck");
  },
  fuckyou: function fuckyou() {
    console.log("fuckyou what the fuck");
  },
};

person.sayHi();
person.fuckyou();
person.fuck();
