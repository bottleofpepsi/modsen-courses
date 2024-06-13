/*
[8] Promise

Вариант 3
Напишите функцию, которая одновременно извлекает данные из нескольких API и
возвращает объединенный результат, используя Promises.
*/

function fetchData(apis) {
    const promises = apis.map(url => fetch(url));

    return Promise.all(promises)
        .then(responces => Promise.all(responces.map(resp => resp.json())));
}

const apis = [
    `https://www.fruityvice.com/api/fruit/` + Math.floor(Math.random() * 100 + 1),
    `https://meowfacts.herokuapp.com/?count=1`,
    `https://goweather.herokuapp.com/weather/Minsk`
];

fetchData(apis).then(results => {
    console.log(`Random fruit: ${results[0]["name"] || "Banana"}\n`);
    console.log(`Random cat fact: \n${results[1]["data"]}\n`);
    console.log(`Weather in Minsk: ${results[2]["description"]}, ${results[2]["temperature"]}`);
});