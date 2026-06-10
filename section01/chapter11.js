function greeting() {
  //함수선언
  console.log("안녕하세요");
}

greeting();

function getArea(width, height) {
  //매개변수는 그냥 이름만
  let area = width + height;
  function temp() {
    // 중첩함수
    console.log("another");
  }
  another();
  return area;
}

let area1 = getArea(10, 20);
console.log(area1);
