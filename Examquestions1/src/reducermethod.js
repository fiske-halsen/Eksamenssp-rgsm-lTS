const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

const numbers2 = [29.76, 41.85, 46.5];

const average = numbers2.reduce((accumulator, current, index, array) => {
  accumulator += current;
  if (index === array.length - 1) {
    return accumulator / array.length;
  } else {
    return accumulator;
  }
});

console.log(average);
