const express = require('express');
const app = express();

// 在这里，调用 express.static() 方法，快速的对外提供静态资源
app.use('/abc', express.static('./files'));
app.use(express.static('./clock'));

app.listen(8080, () => {
  console.log('express server running at http://127.0.0.1:8080')
})


