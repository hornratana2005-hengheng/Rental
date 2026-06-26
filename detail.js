/* detail.js — populate the detail page from a small in-memory dataset */

/** Return the value of a query parameter from the page URL. */
function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

// Sample rental data with multiple images, price, rating and amenities
const rentals = [
  {
    id: 1,
    images: ["images/1", "images/2", "images/3"],
    tag: "Apartment",
    title: "Urban Comfort Apartment",
    desc: "Bright one-bedroom apartment close to shopping and public transport.",
    bed: "1 Bed",
    location: "Phnom Penh",
    price: "$420 / month",
    rating: 4.6,
    amenities: ["Wi‑Fi", "Washer", "Air Conditioning"],
  },
  {
    id: 2,
    images: ["images/2", "images/10", "images/12"],
    tag: "Villa",
    title: "Sunset Luxury Villa",
    desc: "Modern villa with private pool, garden and full amenities.",
    bed: "4 Beds",
    location: "Siem Reap",
    price: "$1,250 / month",
    rating: 4.9,
    amenities: ["Private Pool", "Parking", "Full Kitchen"],
  },
  {
    id: 3,
    images: ["images/3", "images/11"],
    tag: "House",
    title: "Green Garden Home",
    desc: "Comfortable family house with parking and a spacious backyard.",
    bed: "3 Beds",
    location: "Battambang",
    price: "$680 / month",
    rating: 4.4,
    amenities: ["Garden", "Parking", "Pet Friendly"],
  },
  {
    id: 4,
    images: ["images/4", "images/9"],
    tag: "Condominium",
    title: "Skyline Residence Condo",
    desc: "Luxury condominium with panoramic city views and gym access.",
    bed: "2 Beds",
    location: "Phnom Penh",
    price: "$920 / month",
    rating: 4.7,
    amenities: ["Gym", "24/7 Security", "Balcony"],
  },
  {
    id: 5,
    images: ["images/5"],
    tag: "Studio",
    title: "Modern Studio Suite",
    desc: "Cozy, affordable studio perfect for students and solo renters.",
    bed: "1 Bed",
    location: "Sihanoukville",
    price: "$300 / month",
    rating: 4.1,
    amenities: ["Near Campus", "Compact Kitchen"],
  },
  {
    id: 6,
    images: ["images/6", "images/8"],
    tag: "Townhouse",
    title: "Riverside Townhouse",
    desc: "Elegant townhouse steps from riverside dining and parks.",
    bed: "3 Beds",
    location: "Kampot",
    price: "$750 / month",
    rating: 4.5,
    amenities: ["River View", "Parking"],
  },
  {
    id: 7,
    images: ["images/7"],
    tag: "Guest House",
    title: "Indochine Guest House",
    desc: "Charming guest house near local markets and cultural attractions.",
    bed: "2 Beds",
    location: "Siem Reap",
    price: "$360 / month",
    rating: 4.3,
    amenities: ["Local Guide", "Breakfast"],
  },
  {
    id: 8,
    images: ["images/8"],
    tag: "Vacation Rental",
    title: "Garden Retreat",
    desc: "Quiet vacation rental with garden access and outdoor seating.",
    bed: "2 Beds",
    location: "Siem Reap",
    price: "$480 / month",
    rating: 4.2,
    amenities: ["Garden", "Outdoor Seating"],
  },
  {
    id: 9,
    images: ["images/9"],
    tag: "Loft",
    title: "City Loft",
    desc: "Open-plan loft in the heart of the city, ideal for short stays.",
    bed: "1 Bed",
    location: "Phnom Penh",
    price: "$510 / month",
    rating: 4.0,
    amenities: ["Central", "Modern Kitchen"],
  },
  {
    id: 10,
    images: ["images/10"],
    tag: "Beach House",
    title: "Coastal Beach House",
    desc: "Relaxing beach house with ocean views and easy access to the shore.",
    bed: "3 Beds",
    location: "Sihanoukville",
    price: "$980 / month",
    rating: 4.6,
    amenities: ["Ocean View", "Deck"],
  },
  {
    id: 11,
    images: ["images/11"],
    tag: "Countryside",
    title: "Country Cottage",
    desc: "Peaceful cottage in the countryside, perfect for weekend getaways.",
    bed: "2 Beds",
    location: "Kampong Thom",
    price: "$410 / month",
    rating: 4.2,
    amenities: ["Quiet", "Hiking Nearby"],
  },
  {
    id: 12,
    images: ["images/12"],
    tag: "Resort",
    title: "Hilltop Resort Villa",
    desc: "Exclusive resort villa with stunning views and full-service amenities.",
    bed: "4 Beds",
    location: "Kep",
    price: "$1,800 / month",
    rating: 4.8,
    amenities: ["Resort Pool", "Spa", "Breakfast Included"],
  },
];

const idParam = parseInt(getQueryParam("id"), 10) || null;
const rental = rentals.find((r) => r.id === idParam) || rentals[0];

function parseNumberFromText(text) {
  const match = String(text).match(/\d+/);
  return match ? Number(match[0]) : 1;
}

function formatSize(tag) {
  if (tag === "Villa") return "220 sqm";
  if (tag === "Resort") return "320 sqm";
  if (tag === "Townhouse") return "180 sqm";
  if (tag === "Condominium") return "110 sqm";
  if (tag === "Studio") return "42 sqm";
  if (tag === "House") return "150 sqm";
  return "90 sqm";
}

function getHouseRules() {
  return [
    "No smoking inside",
    "No pets allowed",
    "No parties or events",
    "Keep noise to a minimum after 10pm",
  ];
}

function getHostInfo(location) {
  return {
    name: `${location} Rental Co.`,
    since: "Host since 2021",
  };
}

function getDetailFields(r) {
  const beds = parseNumberFromText(r.bed);
  const guests = Math.max(2, beds * 2);
  return {
    baths: beds === 1 ? "1 Bath" : `${beds} Baths`,
    guests,
    size: formatSize(r.tag),
    about: `${r.desc} The property is designed for comfort with modern finishes, reliable connectivity, and a quiet neighborhood.`,
    host: getHostInfo(r.location).name,
    hostSince: getHostInfo(r.location).since,
    reviewCount: Math.max(14, Math.round((r.rating || 4.3) * 14)),
    policy: getHouseRules(),
  };
}

/** Convert a numeric rating into a simple star representation. */
function starsFromRating(r) {
  const rounded = Math.round(r);
  return "★".repeat(rounded) + "☆".repeat(5 - rounded);
}

/**
 * Set the main gallery image and update thumbnail active state.
 * Keeps the small fade animation defined in CSS.
 */
function setMain(src, thumbEl) {
  const img = document.getElementById("detail-image");
  if (!img) return;
  img.classList.remove("visible");
  setTimeout(() => {
    img.src = src;
    img.alt = rental.title;
    img.classList.add("visible");
  }, 140);

  // update active thumbnail
  const thumbs = document.querySelectorAll("#thumbnails img");
  thumbs.forEach((t) => t.classList.remove("active"));
  if (thumbEl) thumbEl.classList.add("active");
}

// Populate DOM — entry point: wire gallery, details and accessibility
document.addEventListener("DOMContentLoaded", () => {
  const img = document.getElementById("detail-image");
  const tag = document.getElementById("detail-tag");
  const title = document.getElementById("detail-title");
  const desc = document.getElementById("detail-desc");
  const bed = document.getElementById("detail-bed");
  const location = document.getElementById("detail-location");

  // Main image + thumbnails
  if (img) {
    const mainImage =
      rental.images && rental.images.length ? rental.images[0] : "";
    img.src = mainImage;
    img.alt = rental.title;
    img.classList.add("visible");
    img.onerror = () => {
      img.onerror = null;
      img.src = `images/${rental.id}`;
    };

    const thumbs = document.getElementById("thumbnails");
    if (thumbs) {
      const images =
        rental.images && rental.images.length ? rental.images : [mainImage];
      images.forEach((src, i) => {
        const t = document.createElement("img");
        t.src = src;
        t.alt = `${rental.title} ${i + 1}`;
        t.tabIndex = 0;
        if (i === 0) t.classList.add("active");
        t.addEventListener("click", () => setMain(src, t));
        t.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") setMain(src, t);
        });
        thumbs.appendChild(t);
      });
    }
  }

  if (tag) tag.textContent = rental.tag;
  if (title) title.textContent = rental.title;
  if (desc) desc.textContent = rental.desc;
  if (bed) bed.textContent = rental.bed;
  if (location) location.textContent = rental.location;

  const extra = getDetailFields(rental);
  const bathEl = document.getElementById("detail-bath");
  const guestsEl = document.getElementById("detail-guests");
  const sizeEl = document.getElementById("detail-size");
  const aboutEl = document.getElementById("detail-about");
  const hostEl = document.getElementById("detail-host");
  const hostSinceEl = document.getElementById("detail-host-since");
  const policyEl = document.getElementById("detail-policy");
  const reviewCountEl = document.getElementById("detail-review-count");
  const guestsSmallEl = document.getElementById("detail-guests-small");

  if (bathEl) bathEl.textContent = extra.baths;
  if (guestsEl) guestsEl.textContent = extra.guests;
  if (sizeEl) sizeEl.textContent = extra.size;
  if (aboutEl) aboutEl.textContent = extra.about;
  if (hostEl) hostEl.textContent = extra.host;
  if (hostSinceEl) hostSinceEl.textContent = extra.hostSince;
  if (reviewCountEl)
    reviewCountEl.textContent = `(${extra.reviewCount} reviews)`;
  if (guestsSmallEl) guestsSmallEl.textContent = `${extra.guests} guests`;

  // Price
  const priceEl = document.getElementById("detail-price");
  if (priceEl) priceEl.textContent = rental.price || "";

  // Rating
  const ratingEl = document.getElementById("detail-rating");
  if (ratingEl) {
    const r = rental.rating || 0;
    ratingEl.textContent = `${starsFromRating(r)} ${r.toFixed(1)}`;
  }

  // Amenities
  const amenitiesEl = document.getElementById("amenities");
  if (amenitiesEl && rental.amenities) {
    rental.amenities.forEach((a) => {
      const span = document.createElement("span");
      span.className = "amen";
      span.textContent = a;
      amenitiesEl.appendChild(span);
    });
  }

  if (policyEl && extra.policy) {
    extra.policy.forEach((rule) => {
      const li = document.createElement("li");
      li.textContent = rule;
      policyEl.appendChild(li);
    });
  }

  // Update page title
  document.title = `${rental.title} — Retal`;
});
