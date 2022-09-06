const fs = require("fs");

function read() {
    return new Promise((resolve, reject) => {
        fs.readFile(__dirname + "/resources/为学.md", (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
}

function readChayangShi() {
    return new Promise((resolve, reject) => {
        fs.readFile(__dirname + "/resources/插秧诗.md", (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
}

function readGSYG() {
    return new Promise((resolve, reject) => {
        fs.readFile(__dirname + "/resources/观书有感.md", (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
}

async function main(){
    let readWeiXue = await read();
    let readChayangshi = await readChayangShi();
    let readGuanshuyougan = await readGSYG();

    console.log(readWeiXue.toString());
    console.log(readChayangshi.toString());
    console.log(readGuanshuyougan.toString());
}


main();