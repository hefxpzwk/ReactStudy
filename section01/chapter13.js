//콜벡 함수

function main(value) {
  console.log(value);
  value();
}

function sub() {
  console.log("I am sub");
}

main(sub);
main(() => {
  console.log("I am fuck");
});

//콜백함수 활용
function repeat(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx);
  }
}
function repeatDouble(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 2);
  }
}
repeat(5);
repeatDouble(5);

//위에 거를 아래거로 쓸수있다 콜백쓰면말이야

function repeatPerfact(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}
repeatPerfact(5, function (idx) {
  console.log(idx);
});
repeatPerfact(5, (idx) => {
  console.log(idx);
});
