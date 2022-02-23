const menu = document.getElementById("menu");
const buttonOpen = document.getElementById("open");
const buttonClose = document.getElementById("close");

buttonOpen.addEventListener("click", (open) => {
  menu.classList.remove("menu");
});

buttonOpen.addEventListener("click", (open) => {
  menu.classList.add("mobile-menu");
});

buttonClose.addEventListener("click", (close) => {
  menu.classList.add("menu");
});

buttonClose.addEventListener("click", (close) => {
  menu.classList.remove("mobile-menu");
});