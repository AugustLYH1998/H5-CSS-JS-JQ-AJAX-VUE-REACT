// 引入fs模块
const fs = require('fs');

// fs.readFile('./resources/为学.md', (err, dataStr1) => {
//     fs.readFile('./resources/插秧诗.md', (err, dataStr2) => {
//         fs.readFile('./resources/观书有感.md', (err, dataStr3) => {

//             console.log(`${dataStr1}` + '\r\n' + `${dataStr2}` + `${dataStr3}`);

//         });

//     });

// });

// 使用primise
const p = new Promise((resolv, reject) => {
    fs.readFile('./resources/为学.md', (err, dataStr) => {
        resolv(dataStr);
    });
});


p.then(value => {
    // console.log(value.toString());

    return new Promise((resolve, reject) => {
        fs.readFile('./resources/插秧诗.md', (err, dataStr) => {
            let value2 = [value, dataStr];
            resolve(value2);
        })
    });
}).then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/观书有感.md', (err, dataStr) => {
            let value2 = [value, dataStr];
            resolve(value2);
        });
    });
}).then(value => {
    console.log(value.toString());
});