
import './Date.css'

const date = (props) => {

    // 获取月份
    const month = props.mydate.toLocaleString('zh-CN', { month: 'long' });
    // 获取日期
    const date = props.mydate.getDate();

    return (
        <div className='mydate'>
            {/* <div className='month'>month</div> */}
            {/* <div className='day'>day</div> */}
            <div className='month'>{month}</div>
            <div className='day'>{date}</div>
        </div>
    )

}

export default date;

