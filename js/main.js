const btnSubNav = document.getElementById("btnSubNav");
const coating = document.getElementById("coating");
const subnav = document.getElementById("subNav");

btnSubNav.onclick = function changeContent() {
  state.coating = true;
  state.subNav = true;
  if (state.coating == true) {
    coating.classList.add("blockCoating");
    console.log("hieu");
  }
  if (state.subNav == true) {
    subnav.classList.add("active");
  }
};
coating.onclick = function () {
  coating.classList.remove("blockCoating");
  subnav.classList.remove("active");
};
var state = {
  coating: false,
  subNav: false,
  col: 4,
};

//  render from data
const dataSport = [
  {
    img: "./img/tan_truong_vs_japan_wcq12-11-2021_15g15-48.webp",
    title: "màn trình diễn của xuân trường",
  },
  {
    img: "./img/hoang_duc_vs_japan_wcq12-11-2021_15g47-12.webp",
    title: "màn trình diễn của hoài đức",
  },
  {
    img: (src =
      "./img/bn_cris-cyborg-vs-sinead-kavanagh-27112-11-2021_17g15-02.webp"),
    title: "lorem",
  },
  {
    img: "./img/phap-kazakhstan13-11-2021_21g44-06.webp",
    title: "lorem",
  },
  {
    img: "./img/nauy-latvia13-11-2021_21g46-27.webp",
    title: "lorem",
  },
  {
    img: "./img/b271_ko_final_bellator_vod13-11-2021_13g55-52.webp",
    title: "lorem",
  },
];
const animePost = [
  {
    img: "https://static.fptplay.net/static/img/share/video/10_11_2020/kimetsu-no-yaiba-fpt-play-luoi-guom-diet-quy-fpt-play10-11-2020_10g18-34.jpg?w=282&mode=scale&fmt=webp",
    title: "Lưỡi gươm diệt quỷ",
  },
  {
    img: "https://static.fptplay.net/static/img/share/video/13_11_2021/nhat-ky-thuong-ngay-cua-tien-vuong-phan-2-fpt-play-the-daily-life-of-the-immortal-king-season-2-fpt-play13-11-2021_14g23-21.jpg?w=282&mode=scale&fmt=webp",
    title: "nhật ký thường ngày của tiên vương",
  },
  {
    img: "https://static.fptplay.net/static/img/share/video/11_11_2021/031761h2-portrait11-11-2021_14g45-50.jpg?w=282&mode=scale&fmt=webp",
    title: "sự thật",
  },
  {
    img: "https://static.fptplay.net/static/img/share/video/hbo/032278A1-portrait.jpg?w=282&mode=scale&fmt=webp",
    title: "ác quỷ",
  },
  {
    img: "https://static.fptplay.net/static/img/share/video/hbo/032893H0-portrait.jpg?w=282&mode=scale&fmt=webp",
    title: "chiến thần",
  },
];

const owl_carousel_1 = document.getElementById("carousel1");
const owl_carousel_2 = document.getElementById("carousel2");

const concat = (arr) => {
  let textHtml1 = arr.map((item) => {
    return `<div class='item'>
              <img
                src="${item.img}"
                alt="phanhieu"
              />
              <h2 class='title'>${item.title}</h2>
            </div>`;
  });
  var state = "";
  for (let value of textHtml1) {
    state += value;
  }
  return state;
};
owl_carousel_1.innerHTML = concat(dataSport);
owl_carousel_2.innerHTML = concat(animePost);

var swiper1 = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
});
