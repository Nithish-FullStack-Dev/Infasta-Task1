let icon = document.getElementsByClassName("fa-solid");
let icon_div = document.getElementsByClassName("nav_slider");

icon[0].addEventListener("click", () => {
  icon[0].classList.toggle("fa-xmark");
  let has = icon[0].classList.contains("fa-xmark");
  has ? (icon_div[0].style.left = "0px") : (icon_div[0].style.left = "-227px");
});
