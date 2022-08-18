// 定义格式化时间的函数
function dateFormat(date) {
  const formatDate = new Date(date);
  const year = padZero(formatDate.getFullYear());
  const month = padZero(formatDate.getMonth() + 1);
  const day = padZero(formatDate.getDate());
  const hours = padZero(formatDate.getHours());
  const minutes = padZero(formatDate.getMinutes());
  const seconds = padZero(formatDate.getSeconds());

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

}

// 定义一个补零的函数
function padZero(n) {
  return n > 9 ? n : '0' + n
}

module.exports = {
  dateFormat
}
