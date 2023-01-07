import Card from "../UI/Card/Card"
import { useState } from 'react'
import './LogsForm.css'

const LogsForm = (props) => {
    // 表单变化 获取用户输入的内容
    // 创建三个变量 存储表单数据
    // let inputDate = '';
    // let inputDesc = '';
    // let inputTime = 0;

    // 创建双向绑定state
    // const [inputDate, setInputDate] = useState('');
    // const [inputDesc, setInputDesc] = useState('');
    // const [inputTime, setInputTime] = useState('');

    // 将表单数据统一到同一个state中
    const [formData, setFormData] = useState({
        inputDate: '',
        inputDesc: '',
        inputTime: ''
    })

    // 创建一个响应函数
    const dateChangeHandler = (e) => {
        // 获取到当前触发事件的对象
        // 事件对象中保存了当前事件触发时的所有信息
        // event.target 执行的是触发事件的对象（DOM对象）
        // console.log(e.target.value);
        // inputDate = e.target.value;
        // console.log(inputDate);
        // setInputDate(e.target.value);

        setFormData({
            ...formData,
            inputDate: e.target.value
        })

    }

    const descChangeHandler = (e) => {
        // inputDesc = e.target.value;
        // console.log(inputDesc);
        // setInputDesc(e.target.value)
        setFormData({
            ...formData,
            inputDesc: e.target.value
        })
    }

    const timeChangeHandler = (e) => {
        // inputTime = e.target.value;
        // console.log(inputTime);
        // setInputTime(e.target.value)
        setFormData({
            ...formData,
            inputTime: e.target.value
        })
    }

    // 提交表单 汇总表单数据
    // 在React中，通常表单不需要自行提交，而是要通过React提交
    const formSubmitHandler = (e) => {
        // 取消表单的默认提交行为
        e.preventDefault();
        // 获取表单数据，拼装为一个对象
        const newLog = {
            date: new Date(formData.inputDate),
            desc: formData.inputDesc,
            time: +formData.inputTime
        }


        // logform添加新的日志 调用回调函数
        props.onSaveLog(newLog);

        // 获取后清空表单项
        setFormData({
            inputDate: '',
            inputDesc: '',
            inputTime: ''
        })

        // console.log(newLog);
    }

    return (
        <Card className='myform'>
            <form onSubmit={formSubmitHandler}>
                <div className="formitem">
                    <label htmlFor='date'>日期</label>
                    <input onChange={dateChangeHandler} value={formData.inputDate} id="date" type="date"></input>
                </div>
                <div className="formitem">
                    <label htmlFor='desc'>内容</label>
                    <input onChange={descChangeHandler} value={formData.inputDesc} id="desc" type="text"></input>
                </div>
                <div className="formitem">
                    <label htmlFor='time'>时长</label>
                    <input onChange={timeChangeHandler} value={formData.inputTime} id="time" type="number"></input>
                </div>
                <div className="form-btn">
                    <button >添加</button>
                </div>
            </form>
        </Card>
    )

}

export default LogsForm