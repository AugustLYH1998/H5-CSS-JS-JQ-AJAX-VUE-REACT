import Logs from './component/Logs/Logs.js'
import LogsForm from './component/LogsForm/LogsForm.js'
import ConfirmModel from './component/UI/ConfirmModel/ConfirmModel'

import './App.css';
import { useState } from 'react';

function App() {

  // 数据
  const [logsData, setLogsData] = useState(
    [
      {
        id: new Date().getTime() + 1,
        date: new Date(2021, 11, 22, 16, 30),
        desc: "学习前端",
        time: 50
      },
      {
        id: new Date().getTime() + 2,
        date: new Date(2022, 11, 22, 16, 30),
        desc: "学习react",
        time: 40
      },
      {
        id: new Date().getTime() + 3,
        date: new Date(2022, 11, 22, 16, 30),
        desc: "学习js",
        time: 20
      },
      {
        id: new Date().getTime() + 4,
        date: new Date(2023, 0, 6, 11, 30),
        desc: "2023年",
        time: 20
      },
      {
        id: new Date().getTime() + 5,
        date: new Date(2024, 0, 6, 11, 30),
        desc: "2024年",
        time: 20
      },
      {
        id: new Date().getTime() + 6,
        date: new Date(2024, 1, 6, 11, 30),
        desc: "2024年222",
        time: 20
      },
    ]
  )

  // 将LogsForm中的数据传递给App组件，然后App组件，将新的日志添加到数组中
  // 子传父 定义一个回调函数
  const saveLogHandler = (newLog) => {
    newLog.id = Date.now() + '';
    console.log(`APP.JS--->+ ${newLog}`);
    console.log(newLog);

    // 最后将数据添加到数组中
    setLogsData([newLog, ...logsData])
  }

  // 定义一个函数，从数据中删除一条日志
  // const delLogByIndex = (index) => {
  //   setLogsData(prevState => {
  //     const newLog = [...prevState];
  //     // splice(start, deleteCount)
  //     newLog.splice(index, 1);
  //     return newLog;
  //   })
  // }

  const delLogById = (id) => {
    // console.log(id);
    setLogsData(prevState => {
      const newLog = [...prevState];
      const rs =  newLog.filter(item => item.id !== id);
      // console.log(rs);
      return rs
    })
  }

  return (
    
    <div className='App'>
      {/* <ConfirmModel></ConfirmModel> */}
      <LogsForm onSaveLog={saveLogHandler}></LogsForm>
      <Logs logsData={logsData} onDelLog={delLogById}></Logs>
    </div>
  );
}

export default App;
