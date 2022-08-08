$(
    function () {

        // 2、将本地数据渲染到页面
        load();
        // alert('11');

        // 1、按下回车 把数据添加到本地存储里面
        // 回车 keycode 13
        $('#title').on('keydown', function (event) {
            if (event.keyCode === 13) {
                if ($(this).val() !== "") {
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

                    $(this).val("");
                } else {
                    alert("请输入内容");
                }

            }
        });

        // 3.删除操作
        $("ol").on("click", "a", function () {
            // alert("111");
            // 先获取本地存储
            var data = getData();
            console.log(data);

            // 修改数据
            var index = $(this).attr("id");
            console.log(index);

            // 删除数据
            // 从index位置开始 删除1个  
            data.splice(index, 1);

            // 保存数组
            saveData(data);

            // 渲染
            load();
        });

        // 4、切换ol和ul的内容
        $("ol,ul").on("click", "input", function () {
            // alert(111);
            // 获取本地数据
            var data = getData();
            // 修改本地数据
            var index = $(this).siblings("a").attr("id");
            data[index].done = $(this).prop("checked");

            // 保存本地数据
            saveData(data);
            // 渲染本地数据
            load();
        })





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
            $("ol,ul").empty();
            // 遍历数据

            var todocount = 0;
            var donecount = 0;

            $.each(data, function (i, n) {
                // console.log(i);
                // console.log(n);
                if (n.done) {
                    $('ul').prepend("<li> <input type = 'checkbox' checked = 'checked'> <p>" + n.title + "</p> <a href = 'javascript:;' id = " + i + "></a> </li>");
                    donecount++;
                } else {
                    $('ol').prepend("<li> <input type = 'checkbox'> <p>" + n.title + "</p> <a href = 'javascript:;' id = " + i + "></a> </li>");
                    todocount++;
                }

            });

            $("#todocount").text(todocount);
            $("#donecount").text(donecount);


        }

    }
)