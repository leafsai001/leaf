const carousel = document.getElementById("carousel");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const imageCount = 5;
let radius = 220;  // 初始的圓圈半徑
let angle = 0;
let images = [];

// 根據螢幕大小調整 radius
function updateRadius() {
    if (window.innerWidth <= 968) {
        radius = 140;  // 小螢幕時圓圈縮小
    } else {
        radius = 220;  // 大螢幕時圓圈保持正常
    }
}

const imagesSrc = [
    "images/IMG_1.png",
    "images/IMG_2.png",
    "images/IMG_3.png",
    "images/IMG_4.png",
    "images/IMG_5.png",
];

// 產生圖片並加入輪播
for (let i = 0; i < imageCount; i++) {
    let img = document.createElement("img");
    img.src = imagesSrc[i % imagesSrc.length];  // 正確設定圖片來源
    carousel.appendChild(img);
    images.push(img);
}

function updatePositions() {
    images.forEach((img, index) => {
        let theta = (Math.PI * 2 * index / imageCount) + angle;
        let x = Math.cos(theta) * radius + 110;
        let y = Math.sin(theta) * radius + 110;
        let scale = 1 + (y / 220);
        img.style.left = `${x}px`;
        img.style.top = `${y}px`;
        img.style.transform = `scale(${scale})`;
        img.style.opacity = scale / 1.5;
    });
}

// 旋轉動畫函數
function rotateCarousel() {
    angle += 0.01;
    updatePositions();
    requestAnimationFrame(rotateCarousel);
}

// 更新圓圈半徑並開始動畫
window.addEventListener('resize', () => {
    updateRadius();
    updatePositions(); // 確保半徑變更後立即更新位置
});

updateRadius(); // 初始設置圓圈半徑
updatePositions(); // 初始更新圖片位置
rotateCarousel();

// 點擊圖片開啟燈箱
images.forEach(img => {
    img.addEventListener("click", function() {
        lightbox.classList.add("active");
        lightboxImg.src = this.src;
    });
});

// 點擊燈箱關閉
lightbox.addEventListener("click", function() {
    lightbox.classList.remove("active");
});
