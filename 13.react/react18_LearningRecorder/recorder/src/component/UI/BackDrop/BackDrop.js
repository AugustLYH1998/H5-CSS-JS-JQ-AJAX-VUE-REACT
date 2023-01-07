import React from 'react';
import './BackDrop.css';
import ReactDOM from "react-dom";

// 获取backdrop的根元素
const backDrop = document.getElementById('backDrop')

const BackDrop = props => {

    return ReactDOM.createPortal(
        <div className='backdrop'>{props.children}</div>
        , backDrop
    )

}

export default BackDrop