/*--- 網站類型的專案 ---*/
const web_projects = [
    {
        link: "https://a1093316.github.io/Web-Final-Nuk/", // 專案連結
        img: "./asset/web-project1.png", // 專案圖片
        tools: ["Html", "Css"], // 專案使用到的技術
        project_portfolio: "期末作業", // 作品資料
        project_type: "網站", // 作品類型
        name: "撿到寶網站", // 專案名稱
        description: "流浪動物網站 | 網頁排版。", // 專案介紹
        year: "2023" // 年度
    },
    {
        link: null, // 專案連結
        img: "./asset/web-project2.png", // 專案圖片
        tools: ["Html", "Css", "Php", "MySQL"], // 專案使用到的技術
        project_portfolio: "期末小專題", // 作品資料
        project_type: "網站", // 作品類型
        name: "中古機車與改裝零件交易平台", // 專案名稱
        description: "瀏覽機車、改裝商品與聯絡賣家購買商品。", // 專案介紹
        year: "2022" // 年度
    },
    {
        link: null, // 專案連結
        img: "./asset/web-project3.png", // 專案圖片
        tools: ["Html", "Css", "JavaScript", "Bootstrap", "RWD"], // 專案使用到的技術
        project_portfolio: "自行練習", // 作品資料
        project_type: "網站", // 作品類型
        name: "Paul的個人網站v2", // 專案名稱
        description: "個人網站第二版，修改了js檔案內容(新增3個紀錄專案資料的js檔)。", // 專案介紹
        year: "2024" // 年度
    }
]

let html_web = "";

for (let i = 0; i < web_projects.length; i++) {
    let project_tools_web = ""; // 專案使用到的技術
    // 跑專案使用到的技術，把他們分成很多個膠囊顯示在project的框框內
    for (let j = 0; j < web_projects[i].tools.length; j++) {
        project_tools_web += `
            <span class="badge badge-pill badge-light mr-2">${web_projects[i].tools[j]}</span>
        `;
    }

    // 主要顯示作品的框框
    html_web += `
        <div class="col-lg-4">
            <div class="position-relative">
                <div class="project-block">
                    <a href="${web_projects[i].link}" target="_blank">
                        <img src="${web_projects[i].img}" class="img-fluid">
                    </a>

                    <!-- 使用到的技術 -->
                    <div class="project-use-skill">
                        ${project_tools_web}
                    </div>

                    <!-- 作品資料 -->
                    <span class="badge badge-dark project-portfolio">${web_projects[i].project_portfolio}</span>
                    <!-- 作品類型 -->
                    <span class="badge project-type"
                        style="background-color: #87a96b; color: #fff;">${web_projects[i].project_type}</span>

                    <div class="project-description pt-2 text-center">
                        <h4>${web_projects[i].name}</h4>
                        <h5>${web_projects[i].description}</h5>
                        <h5>${web_projects[i].year}</h5>
                    </div>
                </div>
            </div>
        </div>
    `;
}

document.getElementById("web").querySelector(".project").innerHTML = html_web;
