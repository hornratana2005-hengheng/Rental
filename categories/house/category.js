const categoryContent = {
  title: "House listings",
  description:
    "Spacious houses with gardens, parking, and room for growing families.",
  tag: "House",
  items: [
    {
      title: "Maple Residence",
      description:
        "A welcoming family home with a large front garden and quiet street.",
      image: "../../assets/images/house/H1.webp",
    },
    {
      title: "Oakwood House",
      description:
        "Generous indoor space with a bright kitchen and backyard patio.",
      image: "../../assets/images/house/H2.webp",
    },
    {
      title: "Willow Creek House",
      description:
        "Perfect for family living with room for children and visitors.",
      image: "../../assets/images/house/H3.webp",
    },
    {
      title: "Elm Court House",
      description:
        "Elegant exterior finishes and a practical layout for everyday comfort.",
      image: "../../assets/images/house/H4.webp",
    },
    {
      title: "Cedar Lane House",
      description: "Private driveway, wooded views, and ample natural light.",
      image: "../../assets/images/house/H5.webp",
    },
    {
      title: "Stonebridge House",
      description:
        "Comfortable family home with double-height ceilings and a terrace.",
      image: "../../assets/images/house/H6.webp",
    },
    {
      title: "Pinewood House",
      description: "Modern interiors and outdoor space for relaxing weekends.",
      image: "../../assets/images/house/H7.webp",
    },
    {
      title: "Rosewood House",
      description:
        "Thoughtful design with good storage and flexible living rooms.",
      image: "../../assets/images/house/H8.webp",
    },
    {
      title: "Greenfield House",
      description:
        "A calm home with landscaped grounds and strong neighborhood appeal.",
      image: "../../assets/images/house/H9.webp",
    },
    {
      title: "Meadowview House",
      description:
        "A bright and airy home crafted for comfort and entertaining.",
      image: "../../assets/images/house/H1.webp",
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
