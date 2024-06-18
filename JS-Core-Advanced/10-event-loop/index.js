/*
[10] Event loop

Вариант 3
Сделайте функцию, которая будет генерировать случайные числа от 1 до 10.
Сделайте так, чтобы сгенерированное число было задержкой функции setTimeout в секундах.
Оберните все это в промис. Пусть промис выполнится успешно, если сгенерировано число 
от 1 до 5, и с ошибкой - если от 6 до 10.
*/

async function randomNumber() {
    const rand = Math.floor(Math.random() * 10 + 1);
    let result = await new Promise((resolve, reject) => {
        if (rand > 5) {
            setTimeout(() => reject(new Error(`${rand} is bigger than 5`)), rand * 1000);
        } else {
            setTimeout(() => resolve("Ok"), rand * 1000);
        }
    })

    return result;
}

const count = 5;
for (let i = 0; i < count; i++) {
    randomNumber().then(val => console.log(val),
                        err => console.log(err));
}



