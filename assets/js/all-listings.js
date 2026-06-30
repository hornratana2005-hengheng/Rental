const allListings = [
  {
    "tag": "Apartment",
    "title": "Skyline Residence",
    "description": "Bright interiors with easy access to transit and downtown cafes.",
    "image": "../assets/images/apartment/A1.webp"
  },
  {
    "tag": "Apartment",
    "title": "Harbor View Apartment",
    "description": "Spacious rooms with premium finishes and balcony views.",
    "image": "../assets/images/apartment/A3.webp"
  },
  {
    "tag": "Apartment",
    "title": "Garden Court Flat",
    "description": "Quiet setting with landscaped gardens and modern amenities.",
    "image": "../assets/images/apartment/A4.jpg"
  },
  {
    "tag": "Apartment",
    "title": "Metro One Apartment",
    "description": "Efficient layout designed for busy professionals and young couples.",
    "image": "../assets/images/apartment/A1.webp"
  },
  {
    "tag": "Apartment",
    "title": "Lakeside Loft",
    "description": "Open-plan living with natural light and premium fixtures.",
    "image": "../assets/images/apartment/A3.webp"
  },
  {
    "tag": "Apartment",
    "title": "City Nest Apartment",
    "description": "Compact, stylish, and near universities, cafes, and shopping.",
    "image": "../assets/images/apartment/A4.jpg"
  },
  {
    "tag": "Apartment",
    "title": "Cedar Grove Flat",
    "description": "Comfort-focused apartment with secure entry and parking.",
    "image": "../assets/images/apartment/A5.webp"
  },
  {
    "tag": "Apartment",
    "title": "North Park Residence",
    "description": "Clean design, practical storage, and excellent neighborhood access.",
    "image": "../assets/images/apartment/A3.webp"
  },
  {
    "tag": "Apartment",
    "title": "Sunset Terrace Apartment",
    "description": "Warm finishes and a relaxing balcony for evening downtime.",
    "image": "../assets/images/apartment/A4.jpg"
  },
  {
    "tag": "Apartment",
    "title": "Riverstone Apartment",
    "description": "Modern comfort with a strong balance of privacy and convenience.",
    "image": "../assets/images/apartment/A1.webp"
  },
  {
    "tag": "House",
    "title": "Maple Residence",
    "description": "A welcoming family home with a large front garden and quiet street.",
    "image": "../assets/images/house/H1.webp"
  },
  {
    "tag": "House",
    "title": "Oakwood House",
    "description": "Generous indoor space with a bright kitchen and backyard patio.",
    "image": "../assets/images/house/H2.webp"
  },
  {
    "tag": "House",
    "title": "Willow Creek House",
    "description": "Perfect for family living with room for children and visitors.",
    "image": "../assets/images/house/H3.webp"
  },
  {
    "tag": "House",
    "title": "Elm Court House",
    "description": "Elegant exterior finishes and a practical layout for everyday comfort.",
    "image": "../assets/images/house/H4.webp"
  },
  {
    "tag": "House",
    "title": "Cedar Lane House",
    "description": "Private driveway, wooded views, and ample natural light.",
    "image": "../assets/images/house/H5.webp"
  },
  {
    "tag": "House",
    "title": "Stonebridge House",
    "description": "Comfortable family home with double-height ceilings and a terrace.",
    "image": "../assets/images/house/H6.webp"
  },
  {
    "tag": "House",
    "title": "Pinewood House",
    "description": "Modern interiors and outdoor space for relaxing weekends.",
    "image": "../assets/images/house/H7.webp"
  },
  {
    "tag": "House",
    "title": "Rosewood House",
    "description": "Thoughtful design with good storage and flexible living rooms.",
    "image": "../assets/images/house/H8.webp"
  },
  {
    "tag": "House",
    "title": "Greenfield House",
    "description": "A calm home with landscaped grounds and strong neighborhood appeal.",
    "image": "../assets/images/house/H9.webp"
  },
  {
    "tag": "House",
    "title": "Meadowview House",
    "description": "A bright and airy home crafted for comfort and entertaining.",
    "image": "../assets/images/house/H1.webp"
  },
  {
    "tag": "Villa",
    "title": "Golden Bay Villa",
    "description": "A refined residence with private gardens and panoramic views.",
    "image": "../assets/images/villa/V1.webp"
  },
  {
    "tag": "Villa",
    "title": "Palm Crest Villa",
    "description": "Open-plan luxury living with a spa-style outdoor retreat.",
    "image": "../assets/images/villa/V2.webp"
  },
  {
    "tag": "Villa",
    "title": "Seabreeze Villa",
    "description": "Bright interiors and large terraces designed for summer entertaining.",
    "image": "../assets/images/villa/v3.webp"
  },
  {
    "tag": "Villa",
    "title": "Crownview Villa",
    "description": "Elegant finishes and a striking exterior with premium comfort.",
    "image": "../assets/images/villa/v4.webp"
  },
  {
    "tag": "Villa",
    "title": "Azure Estate Villa",
    "description": "A private hideaway with lush landscaping and generous living areas.",
    "image": "../assets/images/villa/V5.webp"
  },
  {
    "tag": "Villa",
    "title": "Verde Villa",
    "description": "Perfect for relaxation with a pool, patio, and calm surroundings.",
    "image": "../assets/images/villa/V1.webp"
  },
  {
    "tag": "Villa",
    "title": "Ivory Ridge Villa",
    "description": "Contemporary architecture paired with serene garden spaces.",
    "image": "../assets/images/villa/V2.webp"
  },
  {
    "tag": "Villa",
    "title": "Monarch Villa",
    "description": "High-end design, privacy, and comfortable indoor-outdoor living.",
    "image": "../assets/images/villa/v3.webp"
  },
  {
    "tag": "Villa",
    "title": "Sapphire Villa",
    "description": "Stylish architecture with an expansive outdoor lounge area.",
    "image": "../assets/images/villa/v4.webp"
  },
  {
    "tag": "Villa",
    "title": "Summit View Villa",
    "description": "A luxurious villa with sweeping views and elegant detailing.",
    "image": "../assets/images/villa/V5.webp"
  },
  {
    "tag": "Condominium",
    "title": "Skyline Condo",
    "description": "A polished condo with security, gym access, and city views.",
    "image": "../assets/images/body.png"
  },
  {
    "tag": "Condominium",
    "title": "Harbor View Residence",
    "description": "Contemporary interior finishes and a convenient waterfront location.",
    "image": "../assets/images/body.png"
  },
  {
    "tag": "Condominium",
    "title": "Metro Grand Condo",
    "description": "Smart layout with communal rooftop facilities and lounge space.",
    "image": "../assets/images/body.png"
  },
  {
    "tag": "Condominium",
    "title": "Central Park Condo",
    "description": "Elegant interiors built for comfort and effortless city living.",
    "image": "../assets/images/body.png"
  },
  {
    "tag": "Condominium",
    "title": "Riverline Residence",
    "description": "Bright open-plan spaces with premium fixtures and concierge service.",
    "image": "../assets/images/body.png"
  },
  {
    "tag": "Condominium",
    "title": "Luxe Tower Condo",
    "description": "Modern finishes in a secure building with a full amenity package.",
    "image": "../assets/images/body.png"
  },
  {
    "tag": "Condominium",
    "title": "Summit Plaza Condo",
    "description": "Flexible layout for professionals who value convenience and style.",
    "image": "../assets/images/body.png"
  },
  {
    "tag": "Condominium",
    "title": "Garden View Condo",
    "description": "A relaxed condo with green views and easy access to shopping districts.",
    "image": "../assets/images/body.png"
  },
  {
    "tag": "Condominium",
    "title": "Silverline Residence",
    "description": "Contemporary living with a practical layout and quiet surroundings.",
    "image": "../assets/images/body.png"
  },
  {
    "tag": "Condominium",
    "title": "Crestline Condo",
    "description": "Ideal for urban lifestyle with elegant common areas and secure entry.",
    "image": "../assets/images/body.png"
  },
  {
    "tag": "Room",
    "title": "Private Room",
    "description": "A practical room with essential amenities and easy access to daily essentials.",
    "image": "../assets/images/room/R1.jpg"
  },
  {
    "tag": "Room",
    "title": "Student Room",
    "description": "Budget-friendly and close to campus, transit, and local shops.",
    "image": "../assets/images/room/R2.webp"
  },
  {
    "tag": "Room",
    "title": "Shared Studio Room",
    "description": "A relaxed shared space designed for comfort and community living.",
    "image": "../assets/images/room/R3.webp"
  },
  {
    "tag": "Room",
    "title": "City Room",
    "description": "A compact stay with a comfortable bed and useful workspace.",
    "image": "../assets/images/room/R4.webp"
  },
  {
    "tag": "Room",
    "title": "Garden Room",
    "description": "Bright and quiet with a calm atmosphere and simple furnishings.",
    "image": "../assets/images/room/R5.webp"
  },
  {
    "tag": "Room",
    "title": "Executive Room",
    "description": "Designed for short stays with a tidy layout and modern comforts.",
    "image": "../assets/images/room/R6.webp"
  },
  {
    "tag": "Room",
    "title": "Comfort Room",
    "description": "A warm and welcoming room with secure access and a practical setup.",
    "image": "../assets/images/room/R7.jpg"
  },
  {
    "tag": "Room",
    "title": "Studio Room",
    "description": "Flexible room for solo living with a cozy and efficient layout.",
    "image": "../assets/images/room/R1.jpg"
  },
  {
    "tag": "Room",
    "title": "Quiet Room",
    "description": "Ideal for concentration and rest with a peaceful feel.",
    "image": "../assets/images/room/R2.webp"
  },
  {
    "tag": "Room",
    "title": "Boutique Room",
    "description": "A neat and stylish room with all the essentials for daily comfort.",
    "image": "../assets/images/room/R3.webp"
  },
  {
    "tag": "Office",
    "title": "Executive Office",
    "description": "Premium workspace with modern interiors and professional meeting areas.",
    "image": "../assets/images/office/O1.jpg"
  },
  {
    "tag": "Office",
    "title": "Harbor Workhub",
    "description": "Flexible desks and a polished environment for growing teams.",
    "image": "../assets/images/office/O2.webp"
  },
  {
    "tag": "Office",
    "title": "Skyline Studio",
    "description": "Bright open-plan office with high-speed connectivity and views.",
    "image": "../assets/images/office/O3.webp"
  },
  {
    "tag": "Office",
    "title": "North Avenue Office",
    "description": "A smart and elegant workspace with client-ready meeting rooms.",
    "image": "../assets/images/office/O4.webp"
  },
  {
    "tag": "Office",
    "title": "Centerline Workspace",
    "description": "Flexible office layout suited to startups and boutique firms.",
    "image": "../assets/images/office/O5.webp"
  },
  {
    "tag": "Office",
    "title": "Monarch Office Suite",
    "description": "Spacious and refined with private offices and collaboration areas.",
    "image": "../assets/images/office/O6.webp"
  },
  {
    "tag": "Office",
    "title": "Riverfront Office",
    "description": "A calm professional setting close to transport and business parks.",
    "image": "../assets/images/office/O7.webp"
  },
  {
    "tag": "Office",
    "title": "Lumen Office",
    "description": "Excellent lighting, modern finishes, and team-friendly layout.",
    "image": "../assets/images/office/O8.webp"
  },
  {
    "tag": "Office",
    "title": "Urban Loft Office",
    "description": "Elegant and flexible workspace for creative and professional teams.",
    "image": "../assets/images/office/O9.webp"
  },
  {
    "tag": "Office",
    "title": "Crest Office Studio",
    "description": "A polished workspace designed for focus and client presentation.",
    "image": "../assets/images/office/O10.webp"
  },
  {
    "tag": "Commercial Space",
    "title": "Retail Plaza Space",
    "description": "High-footfall location with strong visibility for shops and cafes.",
    "image": "../assets/images/commercial-space/CM1.webp"
  },
  {
    "tag": "Commercial Space",
    "title": "Main Street Unit",
    "description": "Flexible commercial unit tailored for boutiques and service providers.",
    "image": "../assets/images/commercial-space/CM2.webp"
  },
  {
    "tag": "Commercial Space",
    "title": "Market Avenue Shop",
    "description": "Spacious frontage and a practical layout for daily operations.",
    "image": "../assets/images/commercial-space/CM3.jpg"
  },
  {
    "tag": "Commercial Space",
    "title": "Harbor Retail Space",
    "description": "Ideal for hospitality, retail, or customer-focused businesses.",
    "image": "../assets/images/commercial-space/CM4.webp"
  },
  {
    "tag": "Commercial Space",
    "title": "Business Hub Unit",
    "description": "Flexible floor plan for offices, studios, or showroom use.",
    "image": "../assets/images/commercial-space/CM1.webp"
  },
  {
    "tag": "Commercial Space",
    "title": "Central Arcade Space",
    "description": "A welcoming frontage with strong access to surrounding traffic.",
    "image": "../assets/images/commercial-space/CM2.webp"
  },
  {
    "tag": "Commercial Space",
    "title": "Town Square Unit",
    "description": "Bright interior and prime position for retail or service use.",
    "image": "../assets/images/commercial-space/CM3.jpg"
  },
  {
    "tag": "Commercial Space",
    "title": "Grand Avenue Office Space",
    "description": "A polished commercial environment with excellent curb appeal.",
    "image": "../assets/images/commercial-space/CM4.webp"
  },
  {
    "tag": "Commercial Space",
    "title": "City Center Shop",
    "description": "Built for retail success with a strong street-facing presence.",
    "image": "../assets/images/commercial-space/CM1.webp"
  },
  {
    "tag": "Commercial Space",
    "title": "Signature Retail Unit",
    "description": "A premium commercial space with flexible layout options.",
    "image": "../assets/images/commercial-space/CM2.webp"
  },
  {
    "tag": "Car",
    "title": "Toyota Prius Hybrid",
    "description": "Fuel-efficient sedan for city errands and weekend drives.",
    "image": "../assets/images/car/C3.webp"
  },
  {
    "tag": "Car",
    "title": "Honda Civic Sedan",
    "description": "Comfortable daily rental with smooth handling and modern features.",
    "image": "../assets/images/car/C4.webp"
  },
  {
    "tag": "Car",
    "title": "Ford Ranger Pickup",
    "description": "Reliable pickup with extra cargo room for work or travel.",
    "image": "../assets/images/car/C5.webp"
  },
  {
    "tag": "Car",
    "title": "Hyundai Staria Van",
    "description": "Spacious van for families, groups, and airport transfers.",
    "image": "../assets/images/car/C7.webp"
  },
  {
    "tag": "Car",
    "title": "Mazda CX-5 SUV",
    "description": "Premium SUV with comfortable seating and confident road manners.",
    "image": "../assets/images/car/C3.webp"
  },
  {
    "tag": "Car",
    "title": "Lexus RX Comfort",
    "description": "Refined SUV rental with quiet cabin space and polished details.",
    "image": "../assets/images/car/C4.webp"
  },
  {
    "tag": "Car",
    "title": "Nissan Almera",
    "description": "Simple, affordable sedan for flexible daily transportation.",
    "image": "../assets/images/car/C5.webp"
  },
  {
    "tag": "Car",
    "title": "Kia Carnival",
    "description": "Roomy multi-passenger rental with luggage space and easy access.",
    "image": "../assets/images/car/C7.webp"
  },
  {
    "tag": "Car",
    "title": "Toyota Fortuner",
    "description": "Strong SUV suited to city roads and out-of-town journeys.",
    "image": "../assets/images/car/C3.webp"
  },
  {
    "tag": "Car",
    "title": "Mercedes C-Class",
    "description": "Elegant sedan for business travel and special appointments.",
    "image": "../assets/images/car/C4.webp"
  },
  {
    "tag": "Land",
    "title": "Development Land Plot",
    "description": "A spacious plot with strong potential for future construction or investment.",
    "image": "../assets/images/land/L1.webp"
  },
  {
    "tag": "Land",
    "title": "North Ridge Land",
    "description": "Strategic location with wide frontage and clear development potential.",
    "image": "../assets/images/land/L2.webp"
  },
  {
    "tag": "Land",
    "title": "Meadowview Plot",
    "description": "An open parcel suited to residential or commercial development.",
    "image": "../assets/images/land/L3.webp"
  },
  {
    "tag": "Land",
    "title": "Sunset Valley Land",
    "description": "Excellent access and room for future planning or investment.",
    "image": "../assets/images/land/L4.jpg"
  },
  {
    "tag": "Land",
    "title": "Riverbank Land",
    "description": "Scenic setting with strong potential for private or mixed-use projects.",
    "image": "../assets/images/land/L5.webp"
  },
  {
    "tag": "Land",
    "title": "Cedar Hills Plot",
    "description": "A calm and accessible parcel ideal for future growth.",
    "image": "../assets/images/land/L1.webp"
  },
  {
    "tag": "Land",
    "title": "Pine Grove Land",
    "description": "Flexible lot size with open views and excellent planning options.",
    "image": "../assets/images/land/L2.webp"
  },
  {
    "tag": "Land",
    "title": "Horizon Estate Land",
    "description": "Promising location for development with room to create something special.",
    "image": "../assets/images/land/L3.webp"
  },
  {
    "tag": "Land",
    "title": "Evergreen Plot",
    "description": "An inviting land opportunity in a growing area with strong demand.",
    "image": "../assets/images/land/L4.jpg"
  },
  {
    "tag": "Land",
    "title": "Oak Ridge Land",
    "description": "A wide parcel with excellent potential for future investment.",
    "image": "../assets/images/land/L5.webp"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("all-listings");
  const count = document.getElementById("listing-count");
  if (!container) return;

  if (count) count.textContent = allListings.length;

  container.innerHTML = allListings
    .map(
      (item) => `
        <article class="card-item">
          <img src="${item.image}" alt="${item.title}" />
          <div class="card-content">
            <span class="card-tag">${item.tag}</span>
            <h3 class="card-title">${item.title}</h3>
            <p class="card-text">${item.description}</p>
            <a class="secondary-button" href="../contact.html">Contact Agent</a>
          </div>
        </article>
      `,
    )
    .join("");
});
