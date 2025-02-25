let currentSlide = 0; // 當前幻燈片索引
const slides = document.querySelectorAll('.slide'); // 所有幻燈片

function moveSlide(step) {
    currentSlide += step;
    
    // 如果到達最後一張，從頭開始
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    // 如果到達第一張，回到最後一張
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    // 更新幻燈片顯示
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// 自動播放幻燈片
setInterval(() => {
    moveSlide(1);
}, 5000); // 每 5 秒自動播放下一張
