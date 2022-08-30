import thenFs from 'then-fs'

// console.log(thenFs);

thenFs.readFile('./files/001.txt', 'utf8').then(r1 => {
    console.log(r1);
    console.log(err.message);
}, err => {
});

thenFs.readFile('./files/002.txt', 'utf8').then(r2 => {
    console.log(r2);
}, err => {
    console.log(err.message);
});
thenFs.readFile('./files/003.txt', 'utf8').then(r3 => {
    console.log(r3);
}, err => {
    console.log(err.message);
});

