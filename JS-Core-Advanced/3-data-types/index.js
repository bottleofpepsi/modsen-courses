/*
[3] Data Types

Вариант 3
Напишите функцию, которая принимает число и выводит в консоль 
сумму первой и последней цифры этого числа.
*/

function sumOfFirstAndLastDigits(number) {
    const firstDigit = (number + '').at(0);
    const lastDigit = (number + '').at(-1);

    console.log(+firstDigit + +lastDigit);
}

const number = 59876333333333333333333333333333333339n;
sumOfFirstAndLastDigits(number);
