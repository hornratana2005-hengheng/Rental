const rentals = [
  {
    id: 1,
    image: "assets/images/apartment/A1.webp",
    tag: "Apartment",
    title: "Urban Comfort Apartment",
    desc: "Bright one-bedroom apartment close to shopping and public transport.",
    bed: "1 Bed",
    location: "Phnom Penh",
  },
  {
    id: 2,
    image: "assets/images/villa/V1.webp",
    tag: "Villa",
    title: "Sunset Luxury Villa",
    desc: "Modern villa with private pool, garden and full amenities.",
    bed: "4 Beds",
    location: "Siem Reap",
  },
  {
    id: 3,
    image: "assets/images/house/H5.webp",
    tag: "House",
    title: "Green Garden Home",
    desc: "Comfortable family house with parking and a spacious backyard.",
    bed: "3 Beds",
    location: "Battambang",
  },
  {
    id: 4,
    image: "assets/images/condominium/C4",
    tag: "Condominium",
    title: "Skyline Residence Condo",
    desc: "Luxury condominium with panoramic city views and gym access.",
    bed: "2 Beds",
    location: "Phnom Penh",
  },
  {
    id: 5,
    image: "assets/images/room/R2.webp",
    tag: "Studio",
    title: "Modern Studio Suite",
    desc: "Cozy, affordable studio perfect for students and solo renters.",
    bed: "1 Bed",
    location: "Sihanoukville",
  },
  {
    id: 6,
    image: "assets/images/house/H4.webp",
    tag: "Townhouse",
    title: "Riverside Townhouse",
    desc: "Elegant townhouse steps from riverside dining and parks.",
    bed: "3 Beds",
    location: "Kampot",
  },
  {
    id: 7,
    image: "assets/images/room/R7.jpg",
    tag: "Guest House",
    title: "Indochine Guest House",
    desc: "Charming guest house near local markets and cultural attractions.",
    bed: "2 Beds",
    location: "Siem Reap",
  },
  {
    id: 8,
    image: "assets/images/land/L3.webp",
    tag: "Vacation Rental",
    title: "Garden Retreat",
    desc: "Quiet vacation rental with garden access and outdoor seating.",
    bed: "2 Beds",
    location: "Siem Reap",
  },
  {
    id: 9,
    image: "assets/images/office/O9.webp",
    tag: "Loft",
    title: "City Loft",
    desc: "Open-plan loft in the heart of the city, ideal for short stays.",
    bed: "1 Bed",
    location: "Phnom Penh",
  },
  {
    id: 10,
    image: "assets/images/house/beach_house.webp",
    tag: "Beach House",
    title: "Coastal Beach House",
    desc: "Relaxing beach house with ocean views and easy access to the shore.",
    bed: "3 Beds",
    location: "Sihanoukville",
  },
  {
    id: 11,
    image: "assets/images/house/H9.webp",
    tag: "Countryside",
    title: "Country Cottage",
    desc: "Peaceful cottage in the countryside, perfect for weekend getaways.",
    bed: "2 Beds",
    location: "Kampong Thom",
  },
  {
    id: 12,
    image: "assets/images/villa/V2.webp",
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
                <a class="secondary-button" style="text-align:center;" href="location.html">View Location</a>
            </div>
        </article>
    `;
});
