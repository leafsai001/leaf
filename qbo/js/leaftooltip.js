document.addEventListener("DOMContentLoaded", function () {
    const leaf = document.getElementById("leaf");
    const tooltip = document.getElementById("tooltip");

    // 當滑鼠移到葉子圖片上時顯示提示框
    leaf.addEventListener("mouseover", function () {
        tooltip.style.opacity = "1";
        tooltip.style.visibility = "visible"; // 顯示提示框
    });

    // 當滑鼠移開葉子圖片時隱藏提示框
    leaf.addEventListener("mouseout", function () {
        tooltip.style.opacity = "0";
        tooltip.style.visibility = "hidden"; // 隱藏提示框
    });

    // 點擊葉子跳轉
    leaf.addEventListener("click", function () {
        window.location.href = "index.html"; // 跳轉頁面
    });
});
