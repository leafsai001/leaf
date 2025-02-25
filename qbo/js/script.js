const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', function() {
    navLinks.classList.toggle('active');  // 開關 active 類別來打開/關閉選單

    // 根據選單是否開啟來切換圖示
    if (navLinks.classList.contains('active')) {
        menuIcon.innerHTML = '&times;';  // 當選單開啟，顯示關閉圖示
    } else {
        menuIcon.innerHTML = '&#9776;';  // 當選單關閉，顯示漢堡圖示
    }
});


/* 創意區塊設計 */
const toggleButton = document.getElementById('toggleButton');
        const extraContent = document.getElementById('extraContent');

        toggleButton.addEventListener('click', () => {
            if (extraContent.style.maxHeight) {
                extraContent.style.maxHeight = null;
                toggleButton.textContent = '顯示更多';
            } else {
                extraContent.style.maxHeight = extraContent.scrollHeight + "px";
                toggleButton.textContent = '顯示更少';
            }
        });
/* 鼠標logo */

document.addEventListener('mousemove', function(e) {
    const cursor = document.getElementById('custom-cursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
  });
  

