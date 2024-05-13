// 切換深淺模式
// document.addEventListener('DOMContentLoaded', function() {
//     const darkModeToggle = document.getElementById('darkModeToggle');
//     const body = document.body;

//     // 檢查用戶的深淺模式首選項
//     const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

//     // 根據用戶的首選項設定深淺模式
//     if (isDarkMode) {
//         body.classList.add('dark-mode');
//     } else {
//         body.classList.add('light-mode');
//     }

//     // 點擊按鈕時切換深淺模式
//     darkModeToggle.addEventListener('click', function() {
//         if (body.classList.contains('dark-mode')) {
//         body.classList.remove('dark-mode');
//         body.classList.add('light-mode');
//         localStorage.setItem('darkMode', 'disabled');
//         } else {
//         body.classList.remove('light-mode');
//         body.classList.add('dark-mode');
//         localStorage.setItem('darkMode', 'enabled');
//         }
//     });
// });

// 點擊nav-item的滑動動畫 
$(document).ready(function () {
    // 當選項被點擊時
    $('.navbar-nav a').on('click', function (e) {
        // 阻止默認行為
        e.preventDefault();

        // 取得目標錨點的 ID
        var targetId = $(this).attr('href');

        // 使用 animate 實現滑動動畫
        $('html, body').animate({
            scrollTop: $(targetId).offset().top
        }, 500); // 1000 毫秒為動畫時間
    });
});


// 回到頁面頂端按鈕的滑動動畫
$(document).ready(function () {


    $("h1").delay("1000").fadeIn();


    // hide #back-top first
    $("#back-top").hide();


    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();

            }
        });


        // scroll body to 0px on click
        $('#back-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    });
});


// project nav-link點擊效果
const webLink = document.getElementById("web-link");
const systemLink = document.getElementById("system-link");
const othersLink = document.getElementById("others-link");

webLink.addEventListener("click", function () {
    systemLink.classList.remove("visited");
    othersLink.classList.remove("visited");
    this.classList.add("visited"); // 添加一個類名為 visited
});
systemLink.addEventListener("click", function () {
    webLink.classList.remove("visited");
    othersLink.classList.remove("visited");
    this.classList.add("visited"); // 添加一個類名為 visited
});
othersLink.addEventListener("click", function () {
    systemLink.classList.remove("visited");
    webLink.classList.remove("visited");
    this.classList.add("visited"); // 添加一個類名為 visited
});
