const numbers = [10, 4, 100, -5, 54, 2];
let sumCubesFor = 0;

for (let i = 0; i < numbers.length; i++) {
  sumCubesFor += numbers[i] ** 3;
}

console.log(sumCubesFor);

//цикл for...of

const numbers2 = [10, 4, 100, -5, 54, 2];
let sumCubesForOf = 0;

for (let num of numbers2) {
  sumCubesForOf += num ** 3;
}

console.log(sumCubesForOf);


//метод forEach()

const numbers3 = [10, 4, 100, -5, 54, 2];
let sumCubesForEach = 0;

numbers3.forEach(num => {
  sumCubesForEach += num ** 3;
});

console.log(sumCubesForEach); 

//метод reduce()

const numbers4 = [10, 4, 100, -5, 54, 2];

let sumCubesReduce = numbers4.reduce((acc, curr) => {
  return acc + curr ** 3;
}, 0);

console.log(sumCubesReduce);
