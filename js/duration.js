function updateRunDays() {
    var startDate = new Date("2026-04-08T12:00:00"); // 建站时间，使用 ISO 格式
    var now = new Date();                             // 当前真实时间
    var diffDays = (now - startDate) / (1000 * 60 * 60 * 24);
    var daysNum = Math.floor(diffDays);
    var targetElem = document.getElementById("timeDate");
    if (targetElem) {
        targetElem.innerHTML = "本站已运行 " + daysNum + " 天";
    }
}

// 页面加载时立即执行一次，之后每小时更新一次（天数变化频率很低）
updateRunDays();
setInterval(updateRunDays, 3600000);