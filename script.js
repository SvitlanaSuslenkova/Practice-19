"use strict";
const menuMobile = document.querySelector(".menuimg");
const dropdownMenu = menuMobile.nextElementSibling;
const header = document.querySelector("header");
const firstimg = document.querySelector(".imgTransform");
const h1 = document.querySelector("h1");
const arrow = document.querySelector(".arrowimg");
const arrow2 = document.querySelector(".arrowimg2");

// Mobile menu
menuMobile.addEventListener("click", function () {
  dropdownMenu.classList.toggle("menuDisplay");
});
document.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    dropdownMenu.classList.contains("menuDisplay") &&
    e.target !== dropdownMenu &&
    e.target !== menuMobile &&
    (e.target == header || e.target == firstimg || e.target == h1)
  ) {
    dropdownMenu.classList.remove("menuDisplay");
  }
});

//Arrow
let screenheight = document.documentElement.clientHeight;
let screenwidth = document.documentElement.clientWidth;
let marginTop = getComputedStyle(arrow).marginTop;

let onresize = function () {
  screenheight = document.documentElement.clientHeight;
  return screenheight;
};
let onresize2 = function () {
  screenwidth = document.documentElement.clientWidth;
  return screenwidth;
};
window.addEventListener("resize", onresize);
window.addEventListener("resize", onresize2);

arrow.addEventListener("click", function () {
  window.scrollBy(0, screenheight);
  if (
    document.documentElement.scrollTop <=
    document.documentElement.scrollHeight - screenheight * 1.2
  ) {
    this.style.marginLeft = "95%";
    this.style.position = "fixed";
  } else {
    this.style.position = "absolute";
    this.style.marginTop = `"${marginTop}px"`;
    this.style.marginLeft = "49%";
  }
});
//Arrow2
arrow2.addEventListener("click", function () {
  window.scroll(0, 0);
});
