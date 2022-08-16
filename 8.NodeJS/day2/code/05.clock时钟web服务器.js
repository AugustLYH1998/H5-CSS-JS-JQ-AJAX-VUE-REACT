// 导入http模块
const http = require('http');
// 导入文件系统模块
const fs = require('fs');
// 导入路径模块
const path = require('path');

// 创建web服务器
const server = http.createServer();

// 监听web服务器的request请求
server.on('request', (request, response) => {
  const url = request.url;
  // const fpath = path.join(__dirname, url);
  let fpath = '';
  if (url === '/' || url === '/index') {
    fpath = path.join(__dirname, '/clock/index.html');
  } else {
    fpath = path.join(__dirname, './clock', url);
  }
  console.log(fpath);

  // 读取映射过来的文件
  fs.readFile(fpath, 'utf8', (err, dataStr) => {
    if (err) return response.end('404 not found');
    response.end(dataStr);
  })
});

// 启动服务器
server.listen(8080, () => {
  console.log('server is running in http://127.0.0.1:8080');
});