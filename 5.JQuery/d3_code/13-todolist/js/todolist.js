$(
    function () {

        // 2、将本地数据渲染到页面
        load();
        // alert('11');

        // 1、按下回车 把数据添加到本地存储里面
        // 回车 keycode 13
        $('#title').on('keydown', function (event) {
            if (event.keyCode === 13) {
                // alert('111');
                //先读取本地存储原来的数据
                var local = getData();
                // console.log(local);
                // 把local数组进行更新 把数据追加给local数组
                local.push({ title: $(this).val(), done: false });
                // local存储到本地存储
                saveData(local);
                // 加载
                load();

            }
        });





        //先读取本地存储原来的数据
        function getData() {
            var data = localStorage.getItem('todolist');
            if (data !== null) {
                // 字符串转换为对象形式
                return JSON.parse(data);
            } else {
                return [];
            }
        }

        // 保存本地存储数据
        function saveData(data) {
            localStorage.setItem('todolist', JSON.stringify(data));
        }

        // 将本地数据渲染到页面
        function load() {
            var data = getData();
            // console.log(data);
            // 遍历之前清空元素内容
            $("ol").empty();
            // 遍历数据
            $.each(data, function (i, n) {
                // console.log(i);
                // console.log(n);
                $('ol').prepend("<li> <input type = 'checkbox'> <p>" + n.title + "</p> <a href = 'javascript:;'></a> </li>");
            })
        }

    }
)