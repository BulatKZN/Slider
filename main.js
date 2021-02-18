const swiper = new Swiper(".header-content", {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        bulletActiveClass: "test-active",
        bulletClass: "test"
    }
});
const headerEl = document.querySelector(".header");

const color = ["header-green", "header-blue", "header-pink"];
swiper.on("slideChange", function () {
  headerEl.classList.remove(...color);
  headerEl.classList.add(color[swiper.activeIndex])
})



