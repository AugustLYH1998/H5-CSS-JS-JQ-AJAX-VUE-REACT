const fs = require('fs');

// fs.readFile(__dirname + '/resources/为学.md', (err, dataStr) => {
//     if (err) throw err;
//     console.log(dataStr.toString());
// });

// 使用promise封装
const p = new Promise((resolve, reject) => {
    fs.readFile(__dirname + '/resources/为学.md', (err, dataStr) => {
        if (err) reject(err);
        resolve(dataStr);
    });
});

p.then((value) => {
    console.log(value.toString());
}, (reason) => {
    console.log(reason);
});