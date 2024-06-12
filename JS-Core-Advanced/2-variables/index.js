/*
[2] Variables var, let, const

Вариант 3
Напишите код, в котором попытаетесь обратиться к переменной до её объявления 
с использованием var, let и const. 
Определите, какие переменные допускают такое использование, а какие нет.
*/


//переменная, создаваемая с помощью var допускает обращение к себе до объявления, 
//но её значение будет undefined 
console.log(varVariable);
var varVariable = "var";

//ошибка ReferenceError: Cannot access 'letVariable' before initialization
console.log(letVariable);
let letVariable = "let";

//ошибка ReferenceError: Cannot access 'constVariable' before initialization
console.log(constVariable);
const constVariable = "const";