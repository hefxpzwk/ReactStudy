//spread 연산자
//흩뿌리다, 펼치다 라는 뜻
//객체나 배열에 저장된 여러 값을 개별로 따다닥 하는역할

let arr1 = [1, 2, 3];
let arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6, 7];
//이렇게 해야할때
//그런데 여기서 배열은 자주 바뀔수가있어서 배열인데 절헥 하면 능임
console.log(arr2);

let arr3 = [4, ...arr1, 5, 6, 7]; //이게 쓴거임 뭔말알?
console.log(arr3);

//객체도 똑같음

function funcA(a, b, c) {
  console.log(a, b, c);
}
funcA(...arr1);

//rest 매개변수
function funcB(one, ...asdf) {
  //이거 스프레드가 아니라 rest 라고하는거임 매개변수위치에 ... 이 있으니까
  // rest 매개변수 뒤에는 뭐또 못들어옴 그런데 그 rest 전에는 매개변수들어올수있음 그대는 그 앞에 쓴거에 저장되는거임
  console.log(one);
  console.log(asdf); //배열 형식으로 저장됨
}
funcB(...arr1);
funcB(1, 2, 3);
//rest 매개변수사용과 스프레드는 아무연관없음 이렇게 해도 된다는뜻
