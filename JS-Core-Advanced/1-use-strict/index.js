/*
Напишите функцию, которая принимает строку и возвращает количество гласных букв в ней.
Используйте строгий режим.
*/

'use strict'

function countVowels(string) {
    return string.match(/[aieou]/gi).length;
}

const sentence = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
const allVowels = "AaIiEeOoUu";

console.log(`\"${sentence}\": ${countVowels(sentence)}\n` +
            `\"${allVowels}\": ${countVowels(allVowels)}`);