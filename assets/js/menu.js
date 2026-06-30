document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const navMenu = document.getElementById("nav-menu");

  if (menuIcon && navMenu) {
    menuIcon.setAttribute("aria-expanded", "false");

    menuIcon.addEventListener("click", () => {
      navMenu.classList.toggle("show");
      menuIcon.setAttribute(
        "aria-expanded",
        navMenu.classList.contains("show") ? "true" : "false",
      );
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("show");
        menuIcon.setAttribute("aria-expanded", "false");
      });
    });
  }
});
