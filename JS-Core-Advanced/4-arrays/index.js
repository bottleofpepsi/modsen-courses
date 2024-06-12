/*
Напишите функцию, которая принимает массив с числами 
и находит сумму квадратов элементов этого массива.
*/

function sumOfSecondPowers(array) {
    return array.reduce((acc, x) => acc + x * x, 0);
}

const numbers = [1, 2, 3, 4, 5];

//1 + 4 + 9 + 16 + 25 = 55
console.log(sumOfSecondPowers(numbers));