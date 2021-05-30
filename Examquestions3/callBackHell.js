function calc(a, b, callBack) {
  const value = a + b;
  callBack(value);
}

function callBack(value) {
  console.log(value);
}

calc(1, 2, callBack);

// callbackhell

calc(1, 2, (value) => {
  calc(2, 3, (value) => {
    console.log(value);
  });
});
