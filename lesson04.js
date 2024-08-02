let numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;

// With for
for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i] ** 3; 
} 
console.log(sum); 

// Сбросим  sum перед повторным вычислением
sum = 0;

// with cycle for of
for (let num of numbers){
    sum += num ** 3; 
} 
console.log(sum); 
