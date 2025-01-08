// sum of numbers within an array

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const total = array.reduce((acc, num) => acc + num, 0);
console.log("Sum:", total);
