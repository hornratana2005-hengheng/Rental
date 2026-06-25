const rentals = [
  {
    image: "images/1",
    tag: "Apartment",
    title: "Urban Comfort",
    desc: "Bright one-bedroom apartment near shopping and public transport.",
    bed: "1 Bed",
    location: "Phnom Penh",
  },
  {
    image: "images/2",
    tag: "Luxury Villa",
    title: "Sunset Villa",
    desc: "Modern villa with private pool and spacious garden.",
    bed: "4 Beds",
    location: "Siem Reap",
  },
  {
    image: "images/3",
    tag: "Family House",
    title: "Green Garden Home",
    desc: "Comfortable family house with parking and backyard.",
    bed: "3 Beds",
    location: "Battambang",
  },
  {
    image: "images/4",
    tag: "Condominium",
    title: "Skyline Residence",
    desc: "Luxury condo with city views and gym access.",
    bed: "2 Beds",
    location: "Phnom Penh",
  },
  {
    image: "images/5",
    tag: "Studio",
    title: "Modern Studio",
    desc: "Affordable studio apartment ideal for students.",
    bed: "1 Bed",
    location: "Sihanoukville",
  },
  {
    image: "images/6",
    tag: "Townhouse",
    title: "Riverside Townhouse",
    desc: "Elegant townhouse close to restaurants and parks.",
    bed: "3 Beds",
    location: "Kampot",
  },
  {
    image: "images/7",
    tag: "Indochine Sanctuary Hot",
    title: "Riverside Townhouse",
    desc: "1.2 km from downtown Indochine Sanctuary Hotel is located in Siem Reap, 5.6 miles from Angkor Wat and 1.4 miles from Angkor National Museum.",
    bed: "3 Beds",
    location: "Siem Reap",
  },
];

const container = document.getElementById("cards");

rentals.forEach((rental) => {
  container.innerHTML += `
        <article class="card-item">
            <img src="${rental.image}" alt="${rental.title}">
            <div class="card-content">
                <span class="card-tag">${rental.tag}</span>
                <h3 class="card-title">${rental.title}</h3>
                <p class="card-text">${rental.desc}</p>
                <div class="card-meta">
                    <span><i class="fa-solid fa-bed"></i> ${rental.bed}</span>
                    <span><i class="fa-solid fa-location-dot"></i> ${rental.location}</span>
                </div>
                <a class="secondary-button" href="location.html">View Details</a>
            </div>
        </article>
    `;
});

const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("nav-menu");

if (menuIcon && navMenu) {
  menuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
}
