$(function () {

  // 初始化右侧滚动条
  // 此方法定义再scoll.js中
  // resetui();



  // 发送按钮绑定事件
  $("#btnSend").on("click", function () {
    // alert(111);
    sendMsg();
  });

  $(document).on('keydown', function (e) {
    if (e.keyCode == 13) {
      sendMsg();
    }
  })

  // 发送消息函数
  function sendMsg() {
    if ($(".input_txt").val() !== '') {
      $(".talk_list").append('<li class="right_word"><img src="img/person02.png" /> <span>' + $(".input_txt").val() + '</span></li>');
      getMsg($(".input_txt").val());
      $(".input_txt").val('');
      resetui();
    } else {
      return $(".input_txt").val('');
    }
  }


  // getMsg('你好');
  // 发起请求获取聊天消息
  function getMsg(text) {
    $.ajax({
      type: 'get',
      url: 'http://www.liulongbin.top:3006/api/robot',
      data: {
        spoken: text
      },
      success: function (res) {
        console.log(res);
        console.log(res.data.info.text);
        if (res.message === 'success') {
          $(".talk_list").append('<li class="left_word"><img src="img/person01.png" /><span>' + res.data.info.text + '</span></li>');
        }
      }
    });
  }


})