/*
[7] Error Handling

Вариант 3
Напишите функцию, которая принимает два числа в качестве параметров и выдает
пользовательскую ошибку, если второе число равно нулю.
*/

function divide(firstOperand, secondOperand) {
    if (!secondOperand) {
        throw new Error("Делитель не может быть равен нулю.");
    }

    return firstOperand / secondOperand;
}

console.log(divide(4,3));
console.log(divide(100,0));