const categoryContent = {
  title: "Apartment listings",
  description:
    "Comfortable apartments for families, professionals, and students.",
  tag: "Apartment",
  items: [
    {
      title: "Skyline Residence",
      description:
        "Bright interiors with easy access to transit and downtown cafes.",
      image: "../../assets/images/apartment/A1.webp",
    },
    {
      title: "Harbor View Apartment",
      description: "Spacious rooms with premium finishes and balcony views.",
      image: "../../assets/images/apartment/A3.webp",
    },
    {
      title: "Garden Court Flat",
      description:
        "Quiet setting with landscaped gardens and modern amenities.",
      image: "../../assets/images/apartment/A4.jpg",
    },
    {
      title: "Metro One Apartment",
      description:
        "Efficient layout designed for busy professionals and young couples.",
      image: "../../assets/images/apartment/A1.webp",
    },
    {
      title: "Lakeside Loft",
      description: "Open-plan living with natural light and premium fixtures.",
      image: "../../assets/images/apartment/A3.webp",
    },
    {
      title: "City Nest Apartment",
      description:
        "Compact, stylish, and near universities, cafes, and shopping.",
      image: "../../assets/images/apartment/A4.jpg",
    },
    {
      title: "Cedar Grove Flat",
      description: "Comfort-focused apartment with secure entry and parking.",
      image: "../../assets/images/apartment/A1.webp",
    },
    {
      title: "North Park Residence",
      description:
        "Clean design, practical storage, and excellent neighborhood access.",
      image: "../../assets/images/apartment/A3.webp",
    },
    {
      title: "Sunset Terrace Apartment",
      description: "Warm finishes and a relaxing balcony for evening downtime.",
      image: "../../assets/images/apartment/A4.jpg",
    },
    {
      title: "Riverstone Apartment",
      description:
        "Modern comfort with a strong balance of privacy and convenience.",
      image: "../../assets/images/apartment/A1.webp",
    },
  ],
};

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("category-content");
  if (!container) return;

  const itemsMarkup = categoryContent.items
    .map(
      (item) => `
        <article class="card-item">
          <img src="${item.image}" alt="${item.title}" />
          <div class="card-content">
            <span class="card-tag">${categoryContent.tag}</span>
            <h3 class="card-title">${item.title}</h3>
            <p class="card-text">${item.description}</p>
            <a class="secondary-button" href="../../contact.html" style="text-align:center;">Contact Agent</a>
          </div>
        </article>
      `,
    )
    .join("");

  container.innerHTML = `
    <section class="page-header">
      <h1>${categoryContent.title}</h1>
      <p>${categoryContent.description}</p>
    </section>

    <section class="section">
      <div class="card">${itemsMarkup}</div>
    </section>
  `;
});
