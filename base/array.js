const numbers = [13, 43, 32 ,54, 23];
let results;
// results = numbers.indexOf(1);
// results = numbers.push(6,7);
// console.log(results)
// console.log(numbers)


// results = numbers.unshift(4); /* Добавляет в начала списка*/

// // console.log(results);
// // console.log(numbers);


// results = numbers.shift(8,62,2);

results = numbers.splice(1,4); //вырезали кусок, при этом изменили исходный


console.log(results);
console.log(numbers);



