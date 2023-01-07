
const LogsFilter = props => {

    // 创建监听change事件的响应函数
    const changeHandler = e => {
        props.yearChange(Number(e.target.value));
    };

    return (<div>
        筛选年份：
        <select onChange={changeHandler} value={props.myyear}>
            <option value='0'>全部数据</option>
            <option value="2021" >2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
        </select>

    </div>)

}

export default LogsFilter