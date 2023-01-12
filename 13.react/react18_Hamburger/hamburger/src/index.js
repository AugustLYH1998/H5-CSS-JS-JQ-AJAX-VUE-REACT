import React from 'react'
import ReactDom from 'react-dom/client'

import App from './App'

import './index.css'

// 设置移动端的适配
// 100vw 就是全屏
// 100除以几  视口宽度就是多少  这里除以750 就是750rem为视口
document.documentElement.style.fontSize = 100 + 'vw'


const root = ReactDom.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
)