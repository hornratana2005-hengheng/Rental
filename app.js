const rentals = [
  {
    id: 1,
    image: "images/1",
    tag: "Apartment",
    title: "Urban Comfort Apartment",
    desc: "Bright one-bedroom apartment close to shopping and public transport.",
    bed: "1 Bed",
    location: "Phnom Penh",
  },
  {
    id: 2,
    image: "images/2",
    tag: "Villa",
    title: "Sunset Luxury Villa",
    desc: "Modern villa with private pool, garden and full amenities.",
    bed: "4 Beds",
    location: "Siem Reap",
  },
  {
    id: 3,
    image: "images/3",
    tag: "House",
    title: "Green Garden Home",
    desc: "Comfortable family house with parking and a spacious backyard.",
    bed: "3 Beds",
    location: "Battambang",
  },
  {
    id: 4,
    image: "images/4",
    tag: "Condominium",
    title: "Skyline Residence Condo",
    desc: "Luxury condominium with panoramic city views and gym access.",
    bed: "2 Beds",
    location: "Phnom Penh",
  },
  {
    id: 5,
    image: "images/5",
    tag: "Studio",
    title: "Modern Studio Suite",
    desc: "Cozy, affordable studio perfect for students and solo renters.",
    bed: "1 Bed",
    location: "Sihanoukville",
  },
  {
    id: 6,
    image: "images/6",
    tag: "Townhouse",
    title: "Riverside Townhouse",
    desc: "Elegant townhouse steps from riverside dining and parks.",
    bed: "3 Beds",
    location: "Kampot",
  },
  {
    id: 7,
    image: "images/7",
    tag: "Guest House",
    title: "Indochine Guest House",
    desc: "Charming guest house near local markets and cultural attractions.",
    bed: "2 Beds",
    location: "Siem Reap",
  },
  {
    id: 8,
    image: "images/8",
    tag: "Vacation Rental",
    title: "Garden Retreat",
    desc: "Quiet vacation rental with garden access and outdoor seating.",
    bed: "2 Beds",
    location: "Siem Reap",
  },
  {
    id: 9,
    image: "images/9",
    tag: "Loft",
    title: "City Loft",
    desc: "Open-plan loft in the heart of the city, ideal for short stays.",
    bed: "1 Bed",
    location: "Phnom Penh",
  },
  {
    id: 10,
    image: "images/10",
    tag: "Beach House",
    title: "Coastal Beach House",
    desc: "Relaxing beach house with ocean views and easy access to the shore.",
    bed: "3 Beds",
    location: "Sihanoukville",
  },
  {
    id: 11,
    image: "images/11",
    tag: "Countryside",
    title: "Country Cottage",
    desc: "Peaceful cottage in the countryside, perfect for weekend getaways.",
    bed: "2 Beds",
    location: "Kampong Thom",
  },
  {
    id: 12,
    image: "images/12",
    tag: "Resort",
    title: "Hilltop Resort Villa",
    desc: "Exclusive resort villa with stunning views and full-service amenities.",
    bed: "4 Beds",
    location: "Kep",
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
                <a class="secondary-button" href="detail.html?id=${rental.id}">View Details</a>
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
