import db from '../db/index.js'

export async function getAllUser(request, response) {
    try {
        let [query] = await db.query('select * from user');
        // console.log(query);
        response.send({
            status: 0,
            message: '获取用户列表数据成功',
            data: query
        })
    } catch (e) {
        response.send({
            status: 1,
            message: '查询语句异常',
            desc: e.message()
        })
    }
}


// getAllUser();