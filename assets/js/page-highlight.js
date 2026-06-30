document.addEventListener("DOMContentLoaded", () => {
  const normalizePath = (value) => {
    if (!value) return "index.html";

    const cleaned = decodeURIComponent(value).replace(/[?#].*$/, "");
    const path = cleaned.split("/").filter(Boolean).pop() || "index.html";
    return path.replace(/\\/g, "").replace(/\/$/, "") || "index.html";
  };

  const currentPath = normalizePath(window.location.pathname);

  document.querySelectorAll(".navigation ul li").forEach((item) => {
    const link = item.querySelector("a");
    if (!link) return;

    const hrefPath = normalizePath(link.getAttribute("href"));
    if (hrefPath === currentPath) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  document.querySelectorAll(".category-links a").forEach((link) => {
    const hrefPath = normalizePath(link.getAttribute("href"));
    if (hrefPath === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
