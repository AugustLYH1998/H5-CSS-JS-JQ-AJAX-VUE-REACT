import thenFs from 'then-fs';


thenFs.readFile('./files/0011.txt', 'utf8').catch((err) => {
    console.log(err.message);
}).then((r1) => {
    console.log(r1);
    return thenFs.readFile('./files/002.txt', 'utf8');
}).then((r2) => {
    console.log(r2);
    return thenFs.readFile('./files/003.txt', 'utf8');
}).then((r3) => {
    console.log(r3);
});