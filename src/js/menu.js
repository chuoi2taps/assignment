
  const menu = document.querySelector("#menu");
  const menuRes = document.querySelector(".menu-res");
  const menuTop = document.querySelector(".menu-top");
  menu.addEventListener("click", () => {
    menuRes.classList.toggle("hidden");
    menuTop.classList.toggle("justify-end");
  });
