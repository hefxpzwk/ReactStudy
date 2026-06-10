function funcA() {
  console.log("funcA asdfasdfsafd");
}

let varA = funcA;
varA();

//함수 표현식, 그리고 이거는 호이스팅 안됌
let varB = function funcB() {
  console.log("funcB asdfasdfasdf");
};
//funcB() 이걸로는 못부름
varB();

let varC = function () {
  console.log("funcCasdfadfaasdf");
}; // 익명함수
varC();

let varD = () => {
  return 1;
};
let varE = () => 1; // 위에꺼랑 똑같아요 함수안에서 그냥 바로 즉시 리턴할때 이렇게 쓸수있음
console.log(varD());
