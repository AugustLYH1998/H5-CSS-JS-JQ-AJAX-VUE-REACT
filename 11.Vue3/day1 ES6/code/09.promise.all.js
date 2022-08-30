import thenFs from "then-fs";

const promiseArr = [
    thenFs.readFile('./files/001.txt', 'utf8'),
    thenFs.readFile('./files/002.txt', 'utf8'),
    thenFs.readFile('./files/003.txt', 'utf8'),
];

Promise.all(promiseArr).then(result => {
    console.log(result + 'all');
});

Promise.race(promiseArr).then(result => {
    console.log(result + 'race');
});