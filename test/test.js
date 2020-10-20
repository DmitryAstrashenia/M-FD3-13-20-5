function test() {
  let count = 0;
  return function () {
    return ++count;
  };
}

let btnX = test();
let btnY = test();
let x = btnX;
let y = btnY;
