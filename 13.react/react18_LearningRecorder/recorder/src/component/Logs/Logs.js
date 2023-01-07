import './Logs.css'
import LogsItem from './LogsItem/LogsItem'
import Card from '../UI/Card/Card'
import LogsFilter from './LogsFilter/LogsFilter'
import { useState } from 'react'

const Logs = (props) => {

    /*
    *   logsDate 用来存储学习的日志，
    *       这个数据除了当前组件Logs需要使用外，LogsForm也需要使用
    *       当遇到一个数据需要被多个组件使用时，我们可以将数据放入到这些组件共同的祖先元素中
    *       这样就可以使得多个组件都能方便的访问到这个数据
    *
    *   state的提升
    *
    * */
    // const logsData = [
    //     {
    //         id: new Date().getTime() + 1,
    //         date: new Date(2022, 11, 22, 16, 30),
    //         desc: "学习前端",
    //         time: 50
    //     },
    //     {
    //         id: new Date().getTime() + 2,
    //         date: new Date(2022, 11, 22, 16, 30),
    //         desc: "学习react",
    //         time: 40
    //     },
    //     {
    //         id: new Date().getTime() + 3,
    //         date: new Date(2022, 11, 22, 16, 30),
    //         desc: "学习js",
    //         time: 20
    //     }
    // ]

    // 设置state双向绑定数据
    const [year, setYear] = useState(2022)

    // 将获取的数据过滤
    let filterYear = -1
    if (year === 0) {
        filterYear = props.logsData.filter(item =>
            item.date.getFullYear() !== year
        );
    } else {
        filterYear = props.logsData.filter(item =>
            item.date.getFullYear() === year
        );
    }

    // console.log(filterYear);

    // 下拉框事件监听函数
    const yearChange = year => {
        setYear(year)
    }

    // 将数据放入jsx
    // let result = props.logsData.map((item, index) =>
    let result = filterYear.map((item, index) =>
        <LogsItem
            key={item.id}
            date={item.date}
            desc={item.desc}
            time={item.time}
            onDelLog={() => props.onDelLog(item.id)}
        ></LogsItem>
    )

    // console.log(result);

    // 添加空列表提示
    if (result.length === 0) {
        result = <p className="no-logs">没要找到日志！</p>;
    }

    return (
        // <div className="Logs">
        //     这是logs区域
        //     <LogsItem date={new Date()} desc={"学习前端"} time={'50分钟'}></LogsItem>
        //     <LogsItem date={new Date()} desc={"学习react"} time={'40分钟'}></LogsItem>
        //     <LogsItem date={new Date()} desc={"学习js"} time={'20分钟'}></LogsItem>
        // </div>

        // 修改logs 模拟取数据
        // <div className="Logs">
        //     {result}
        // </div>

        // 使用ui美化组件card
        <Card className='Logs'>
            <LogsFilter yearChange={yearChange} myyear={year}></LogsFilter>
            {result}
        </Card>
    )
}

export default Logs;

