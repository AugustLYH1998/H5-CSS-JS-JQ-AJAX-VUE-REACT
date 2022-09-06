// 入口文件

// 模块引入
import * as m1 from "./m1 分别暴露.js";
import * as m2 from "./m2 统一暴露.js";
import * as m3 from "./m3 默认暴露.js";

// console.log(m1);
// console.log(m2);
// console.log(m3);

// m1.teach;
// m2.findJob;
// m3.default.change();

// 导入npm包
import $ from 'jquery';  //const $ = require("jquery");
$('body').css('background','pink');