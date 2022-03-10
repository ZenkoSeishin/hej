let element = document.querySelector(".container");

document.addEventListener("scroll", function () {
  if (
    window.scrollY >
    element.offsetTop -
      document.documentElement.clientHeight +
      element.offsetHeight / 2
  ) {
    document.querySelector(".container").classList.add("visible");
  }
});

document.querySelector("body").style.opacity = 1;
