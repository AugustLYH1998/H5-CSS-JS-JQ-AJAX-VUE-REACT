import './LogsItem.css'
import Date from './Date/Date.js'
import Card from '../../UI/Card/Card'
import ConfirmModel from '../../UI/ConfirmModel/ConfirmModel'
import { useState } from 'react'

const LogsItem = (props) => {

    // 添加一个state，记录是否显示确认窗口 默认赋值false
    const [showConfirm, setShowConfirm] = useState(false);

    // 添加item的响应函数
    const deleteItemHandler = () => {

        // 如果触发函数，就显示窗口
        setShowConfirm(true);

        // 临时性创建一个确认框
        // const isDel = window.confirm('该操作不可恢复，确认吗？');
        // if (isDel) {
        //     props.onDelLog()
        // }
    }

    // 取消函数
    const cancelHandler = () => {
        setShowConfirm(false)
        // console.log(1);
    }

    // 确认函数
    const okHandler = () => {
        props.onDelLog()
        // console.log(1);
        setShowConfirm(false)
    }

    return (
        <Card className='item'>

            {/* 添加弹窗组件 */}
            {showConfirm && <ConfirmModel
                confirmText='该操作不能恢复哦！'
                // 添加删除和增加按钮函数
                onCancel={cancelHandler}
                onOk={okHandler}
            ></ConfirmModel>}


            <Date mydate={props.date}></Date>
            <div className='content'>
                {/* <div className='desc'>学习xxx</div> */}
                {/* <div className='time'>xxx分钟</div> */}
                <div className='desc'>{props.desc}</div>
                <div className='time'>{props.time}分钟</div>
            </div>
            {/* 添加一个item项的删除按钮 */}
            <div>
                <div onClick={deleteItemHandler} className='delete'>X</div>
            </div>

        </Card>
    )
}

export default LogsItem

