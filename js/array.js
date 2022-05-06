// .length

const numbers = [1, 2, 3, 4];
const fruits = ["Apple", "Banana", "Cherry"];

console.log(numbers.length);
console.log(fruits.length);
console.log([1, 2].length);

console.log([].length);

// .concat()

const numbers = [1, 2, 3, 4];
const fruits = ["Apple", "Banana", "Cherry"];

console.log(numbers.concat(fruits));
console.log(numbers);
console.log(fruits);

// .forEach()

const numbers = [1, 2, 3, 4];
const fruit = ["Apple", "Banana", "Cherry"];

fruits.forEach(function (element, index, array) {
  console.log(element, index, array);
});

// .map()

const numbers = [1, 2, 3, 4];
const fruits = ["Apple", "Banana", "Cherry"];

const a = fruits.forEach((fruit, index) => {
  console.log(`${fruit}-${index}`);
});
console.log(a);

const b = fruits.map((fruit, index) => ({
  id: index,
  name: fruit,
}));
console.log(b);
