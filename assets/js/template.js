function getBasePath() {
  const segments = window.location.pathname.split("/").filter(Boolean);
  const depth = Math.max(0, segments.length - 1);
  return "../".repeat(depth);
}

function createNavigation(base) {
  const current = window.location.pathname.toLowerCase();
  const links = [
    {
      href: `${base}index.html`,
      label: "Home",
      match: current.endsWith("index.html") || current.endsWith("/"),
    },
    {
      href: `${base}about.html`,
      label: "About Us",
      match: current.endsWith("about.html"),
    },
    {
      href: `${base}location.html`,
      label: "Location",
      match: current.endsWith("location.html"),
    },
    {
      href: `${base}contact.html`,
      label: "Contact",
      match: current.endsWith("contact.html"),
    },
  ];

  const navLinks = links
    .map((link) => {
      const isHome = link.label === "Home";
      return `
            <li${link.match ? ' class="active"' : ""}>
              <a href="${link.href}">
                <i class="fa-solid ${isHome ? "fa-house-chimney" : link.label === "About Us" ? "fa-circle-user" : link.label === "Location" ? "fa-location-dot" : "fa-user-clock"}"></i>
                ${link.label}
              </a>
            </li>`;
    })
    .join("");

  return `
    <nav class="navigation">
      <div class="left">
        <div class="logo"><i class="fa-solid fa-house-chimney"></i> Rental</div>
      </div>
      <div class="right">
        <ul id="nav-menu">
          ${navLinks}
          <li>
            <a href="${base}login.html" class="login-button">Log In</a>
          </li>
        </ul>
      </div>
      <button
        class="menu-icon"
        id="menu-icon"
        type="button"
        aria-label="Open navigation menu"
        aria-controls="nav-menu"
      >
        <i class="fa-solid fa-bars"></i>
      </button>
    </nav>`;
}

function createFooter(base) {
  return `
    <footer class="site-footer">
      <div class="site-footer__wrapper">
        <div class="site-footer__top">
          <div class="footer-brand">
            <div class="logo"><i class="fa-solid fa-house-chimney"></i> Rental</div>
            <p>Trusted rentals and modern spaces for every stay. Browse listings, discover new homes, and stay updated on the best rental options.</p>
          </div>
          <div class="footer-social">
            <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i class="fa-brands fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="#" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
          </div>
        </div>

        <div class="site-footer__grid">
          <div class="footer-column">
            <h3>Company</h3>
            <a href="${base}index.html">Home</a>
            <a href="${base}about.html">About Us</a>
            <a href="${base}location.html">Location</a>
            <a href="${base}contact.html">Contact</a>
          </div>
          <div class="footer-column">
            <h3>Categories</h3>
            <a href="${base}categories/apartment/">Apartment</a>
            <a href="${base}categories/house/">House</a>
            <a href="${base}categories/villa/">Villa</a>
            <a href="${base}categories/condominium/">Condominium</a>
          </div>
          <div class="footer-column">
            <h3>Support</h3>
            <a href="mailto:support@retalrentals.com">Email Support</a>
            <a href="${base}contact.html">Contact page</a>
            <a href="${base}location.html">Visit us</a>
            <a href="#">FAQ</a>
          </div>
          <div class="footer-column footer-subscribe">
            <h3>Subscribe</h3>
            <p>Receive rental updates and new listings by email.</p>
            <form class="footer-subscribe-form" action="#" method="post">
              <input type="email" placeholder="Enter your email" aria-label="Email address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div class="site-footer__bottom">
          <span>© 2026 Retal Rentals. All rights reserved.</span>
          <div class="footer-legal-links">
            <a href="#">Privacy policy</a>
            <a href="#">Terms &amp; condition</a>
          </div>
        </div>
      </div>
    </footer>`;
}

function injectTemplate() {
  const base = getBasePath();
  const headerPlaceholder = document.getElementById("site-header");
  const footerPlaceholder = document.getElementById("site-footer");

  if (headerPlaceholder) {
    const pathname = window.location.pathname.toLowerCase();
    // Do not inject navbar on the property detail page
    if (!pathname.endsWith("detail.html")) {
      headerPlaceholder.innerHTML = createNavigation(base);
    }
  }

  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = createFooter(base);
  }
}

function initMenu() {
  const menuIcon = document.getElementById("menu-icon");
  const navMenu = document.getElementById("nav-menu");

  if (!menuIcon || !navMenu) return;

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

window.addEventListener("DOMContentLoaded", () => {
  injectTemplate();
  initMenu();
});
