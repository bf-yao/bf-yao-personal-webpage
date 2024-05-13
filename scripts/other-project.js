/*--- 系統類型的專案 ---*/
const other_projects = [
    {
        link: "https://www.youtube.com/playlist?list=PLGaXCxwAQE7pz2ZhLaZ58mIHu-i46VtNB", // 專案連結
        img: "./asset/others-project1.png", // 專案圖片
        tools: ["剪映", "Youtube"], // 專案使用到的技術
        project_portfolio: "比賽", // 作品資料
        project_type: "影片剪輯", // 作品類型
        name: "挺好Campus社群商務競賽影片", // 專案名稱
        description: "使用剪輯軟體剪輯影片並上傳。", // 專案介紹
        year: "2022" // 年度
    }
]

let html_other = "";

for (let i=0;i<other_projects.length;i++) {
    let project_tools_other = ""; // 專案使用到的技術
    // 跑專案使用到的技術，把他們分成很多個膠囊顯示在project的框框內
    for (let j=0;j<other_projects[i].tools.length;j++){
        project_tools_other += `
            <span class="badge badge-pill badge-light mr-2">${other_projects[i].tools[j]}</span>
        `;   
    }

    // 主要顯示作品的框框
    html_other += `
        <div class="col-lg-4">
            <div class="position-relative">
                <div class="project-block">
                    <a href="${other_projects[i].link}" target="_blank">
                        <img src="${other_projects[i].img}" class="img-fluid">
                    </a>

                    <!-- 使用到的技術 -->
                    <div class="project-use-skill">
                        ${project_tools_other}
                    </div>

                    <!-- 作品資料 -->
                    <span class="badge badge-dark project-portfolio">${other_projects[i].project_portfolio}</span>
                    <!-- 作品類型 -->
                    <span class="badge project-type"
                        style="background-color: #87a96b; color: #fff;">${other_projects[i].project_type}</span>

                    <div class="project-description pt-2 text-center">
                        <h4>${other_projects[i].name}</h4>
                        <h5>${other_projects[i].description}</h5>
                        <h5>${other_projects[i].year}</h5>
                    </div>
                </div>
            </div>
        </div>
    `;

}

document.getElementById("others").querySelector(".project").innerHTML = html_other;
