// 監聽所有有 'scroll-link' 類的連結點擊事件
document.querySelectorAll('.scroll-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();  // 阻止默認的跳轉行為

        // 獲取目標元素
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // 使用 scrollIntoView() 進行平滑滾動
        targetElement.scrollIntoView({
            behavior: 'smooth',  // 平滑滾動
            block: 'start'       // 使滾動後元素對齊頁面頂部
        });
    });
});
