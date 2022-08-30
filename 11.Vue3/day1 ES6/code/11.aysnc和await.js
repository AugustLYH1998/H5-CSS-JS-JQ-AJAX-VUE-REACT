import thenFs from 'then-fs';

console.log('a');

async function getAllFile() {
    console.log('b');
    let readFile = await thenFs.readFile('./files/001.txt', 'utf8');
    console.log(readFile);

    let readFile2 = await thenFs.readFile('./files/002.txt', 'utf8');
    console.log(readFile2);

    let readFile3 = await thenFs.readFile('./files/003.txt', 'utf8');
    console.log(readFile3);
    console.log('d');
}

getAllFile();
console.log('c');