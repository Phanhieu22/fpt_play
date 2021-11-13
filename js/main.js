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
