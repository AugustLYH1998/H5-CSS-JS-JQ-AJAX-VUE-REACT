// 1. 使用 ES6 导入语法，导入 jQuery
import $ from 'jquery'

// 安装webpack
// npm i webpack@5.42.1 webpack-cli@4.7.2 -D

// 导入样式（在 webpack 中，一切皆模块，都可以通过 ES6 导入语法进行导入和使用）
// 如果某个模块中，使用 from 接收到的成员为 undefined，则没必要进行接收
import './css/index.css'
import './css/index.less'

// 导入图片
import logo from './images/logo.jpg'
// 动态赋值
$('.box').attr('src', logo);

console.log(logo);


// 2. 定义 jQuery 的入口函数
$(function () {
  // 3. 实现奇偶行变色
  // 奇数行为红色
  $('li:odd').css('background-color', 'red')
  $('li:even').css('background-color', 'yellow')
  // 0 是偶数
  // 1 是奇数
})



// 定义装饰器
function info(target) {
  target.info = 'person info';
}

@info
class Person { }

console.log(Person.info);