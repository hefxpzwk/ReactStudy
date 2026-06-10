//배열 구조분해할당
let arr1 = [1, 2, 3];
let one = arr1[0];
let two = arr1[1];
let three = arr1[2];
//위랑 아래랑 똑가터
let [a, b, c] = arr1;
console.log(one, two, three);
console.log(a, b, c);

let [q, w, e, r, t = 5] = arr1; //이런식으로 없는것도 넣을수있는데 초기값지정할수도있고 안하면 언디파인
console.log(q, w, e, r, t);

//객체 구조분해할당
//배열이랑 똑같음그런데 {} 중괄호 이용해야하는게 특징
let person = { name: "asdf", fuck: "fuck" };
let { name, age = 1, fuck: fuckyou } = person;
//이름바꿔서 받을수도 있음
console.log(name, age, fuckyou);

//활용
const func = ({ name, fuck }) => {
  console.log(name, fuck);
};

func(person);
func(1); //이상한거느면 언디파인뜸 둘다 안들어가ㅠㅠ
