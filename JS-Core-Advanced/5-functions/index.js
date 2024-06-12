/*
Напишите функцию для поиска первого неповторяющегося символа.
*/

function findFirstNonRepeatingChar(string) {
    return string.split("").find((char, _, arr) => 
        arr.filter(elem => elem === char).length === 1);
}

const string = "lorem ipsum dolor sit amet consectetur adipiscing elit";

console.log(findFirstNonRepeatingChar(string));