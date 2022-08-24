// 导入mysql
const mysqlConnect = require('mysql');


// 建立与mysql的链接
const db = mysqlConnect.createPool({
    host: '127.0.0.1',//数据库的ip
    user: 'root',
    password: '123456',
    database: 'test'
});

// 查询user中的所有数据
const sqlStr = 'select * from user';
db.query(sqlStr, (err, result) => {
    if (err) {
        console.log(err.message);
    }
    console.log(result);
});

// 插入用户
// const user2 = { id: '6', name: 'spaiderman' };
// const sqlStr2 = "insert into user values (?,?,null,null,null,null)";
// db.query(sqlStr2, [user2.id, user2.name], (err, result) => {
//     if (err) { return console.log(err.message); }
//     if (result.affectedRows === 1) { console.log('插入成功'); }
// });

// 插入用户
// const user2 = { name: 'spaiderman' };
// const sqlStr2 = "insert into user set ?";
// db.query(sqlStr2, user2, (err, result) => {
//     if (err) { return console.log(err.message); }
//     if (result.affectedRows === 1) { console.log('插入成功'); }
// });

// 更新用户
const user3 = { id: 7, pwd: '123' };
const sqlStr3 = 'update user set ? where id = ? ';

db.query(sqlStr3, [user3, user3.id], (err, result) => {
    if (err) return console.log(err.message);
    if (result.affectedRows === 1) {
        console.log('更新成功');
    }
})

// 删除用户
// const sqlStr4 = 'delete from user where id = ?';
// db.query(sqlStr4, 7, (err, result) => {
//     if (err) return console.log(err.message);
//     if (result.affectedRows === 1) {
//         console.log('删除成功');
//     }
// })

// 标记删除
const sqlStr5 = 'update user set info = ? where id = ?';
db.query(sqlStr5, [1, 6], (err, result) => {
    if (err) return console.log(err.message);
    if (result.affectedRows === 1) {
        console.log('删除成功');
    }
})
