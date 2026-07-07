const slider = document.querySelector(".bestimg");

document.querySelector(".next").addEventListener("click", () => {
    slider.scrollBy({
        left: 375,
        behavior: "smooth"
    });
});

document.querySelector(".prev").addEventListener("click", () => {
    slider.scrollBy({
        left: -375,
        behavior: "smooth"
    });
});

// 모바일 햄버거 메뉴
const menuBtn = document.querySelector(".menu_btn");
const menu = document.querySelector(".menu");

if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("open");
        menuBtn.classList.toggle("active");
    });

    // 메뉴에서 링크를 클릭하면 자동으로 닫힘
    menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            menu.classList.remove("open");
            menuBtn.classList.remove("active");
        });
    });
}