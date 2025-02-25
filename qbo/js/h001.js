document.addEventListener("DOMContentLoaded", () => {
  let sections = gsap.utils.toArray("section"),
      images = gsap.utils.toArray(".bg"),
      outerWrappers = gsap.utils.toArray(".outer"),
      innerWrappers = gsap.utils.toArray(".inner"),
      headings = gsap.utils.toArray(".section-heading");

  // 確保 headings 內部有元素
  if (headings.length === 0) {
      console.log("❌ No .section-heading found!");
  } else {
      console.log("Headings found:", headings);
  }

  // Split the text for each heading
  function splitText(element) {
    if (element && element.innerText.trim() !== "") {
      console.log("Splitting text for:", element.innerText);  // 顯示每個標題的文字
      let text = element.innerText;
      let spanText = text.split('').map(char => `<span>${char}</span>`).join('');
      element.innerHTML = spanText;
      console.log("Text after split:", element.innerHTML);  // 確保文字已分割並包裹在 <span> 中
    }
  }

  // Apply splitText to all headings
  headings.forEach(splitText);

  // 設定初始值
  gsap.set(outerWrappers, { yPercent: 100 });
  gsap.set(innerWrappers, { yPercent: -100 });

  let currentIndex = -1,
      wrap = gsap.utils.wrap(0, sections.length),
      animating = false;

  // 頁面切換動畫
  function gotoSection(index, direction) {
      index = wrap(index);
      animating = true;
      let fromTop = direction === -1,
          dFactor = fromTop ? -1 : 1,
          tl = gsap.timeline({
              defaults: { duration: 1.25, ease: "power1.inOut" },
              onComplete: () => animating = false
          });

      if (currentIndex >= 0) {
          gsap.set(sections[currentIndex], { zIndex: 0 });
          tl.to(images[currentIndex], { yPercent: -15 * dFactor })
            .set(sections[currentIndex], { autoAlpha: 0 });
      }

      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });

      tl.fromTo([outerWrappers[index], innerWrappers[index]], { 
              yPercent: i => i ? -100 * dFactor : 100 * dFactor
          }, { 
              yPercent: 0 
          }, 0)
          .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0);

      // Ensure headings[index] exists and apply animation
      if (headings[index]) {
          console.log("Animating heading:", headings[index].innerText);  // 確認正在動畫的標題
          tl.fromTo(headings[index].querySelectorAll('span'), { 
                  autoAlpha: 0, 
                  yPercent: 150 * dFactor
              }, {
                  autoAlpha: 1,
                  yPercent: 0,
                  duration: 1,
                  ease: "power2",
                  stagger: {
                      each: 0.02,  // 每個字母的動畫間隔時間
                      from: "random" // 隨機順序
                  }
              }, 0.2);
      }

      currentIndex = index;
  }

  // 設定滾動控制
  Observer.create({
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => !animating && gotoSection(currentIndex - 1, -1),
      onUp: () => !animating && gotoSection(currentIndex + 1, 1),
      tolerance: 10,
      preventDefault: true
  });

  // 在 DOM 加載後初始化
  gotoSection(0, 1);

  // 延遲載入，確保文字的動畫能正常顯示
  setTimeout(() => {
    let headings = gsap.utils.toArray(".section-heading");
    console.log("Headings found:", headings);
    gsap.fromTo(headings, { opacity: 0 }, { opacity: 1 });
  }, 500);  // 延遲 500ms 確保元素加載完畢
});
document.addEventListener("DOMContentLoaded", () => {
  // 等待所有元素加載完成後顯示頁面
  setTimeout(() => {
      document.body.classList.add("visible");
  }, 500); // 可以根據需要調整延遲時間
});
