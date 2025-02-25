window.onload = function () {
    const text = "點擊進入網頁"; // 你要顯示的文字
    const container = document.querySelector('.text-container');
    container.innerHTML = ''; // 清空容器

    // 將每個字母包裹在 span 標籤中
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.animationDelay = `${(index + 1) * 0.5}s`; // 設定延遲時間
        container.appendChild(span);
    });
};