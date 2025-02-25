document.addEventListener("DOMContentLoaded", function () {
    const starCount = 200; // 星星數量
    const body = document.body;

    // 生成隨機位置的星星
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        const size = Math.random() * 3 + 1; // 星星大小隨機 1 ~ 4px
        const x = Math.random() * window.innerWidth; // 隨機X座標
        const y = Math.random() * window.innerHeight; // 隨機Y座標
        const animationDuration = Math.random() * 5 + 3; // 隨機動畫持續時間 3 ~ 8秒

        // 設置星星樣式
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.animationDuration = `${animationDuration}s`;

        body.appendChild(star);

        // 隨機延遲使星星的動畫不同步
        star.style.animationDelay = `${Math.random() * 5}s`;
    }
});