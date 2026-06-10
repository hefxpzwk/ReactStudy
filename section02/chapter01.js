//falsy -> 거짓같은
undefined;
null;
0;
-0;
("");
0n;

//truthy -> 참같은
//falsy 빼고 나머지
("hello");
123;
[];
{
}
() => {};

//활용사례
function printName(person) {
  if (!person) {
    console.log("person 이 없음");
    return;
  }
  console.log(person.name);
}

let person = { name: "이거니" };
printName(person);
