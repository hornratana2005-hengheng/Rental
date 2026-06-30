const categoryContent = {
  title: "Land listings",
  description:
    "Open land options for development, investment, or future building plans.",
  tag: "Land",
  items: [
    {
      title: "Development Land Plot",
      description:
        "A spacious plot with strong potential for future construction or investment.",
      image: "../../assets/images/land/L1.webp",
    },
    {
      title: "North Ridge Land",
      description:
        "Strategic location with wide frontage and clear development potential.",
      image: "../../assets/images/land/L2.webp",
    },
    {
      title: "Meadowview Plot",
      description:
        "An open parcel suited to residential or commercial development.",
      image: "../../assets/images/land/L3.webp",
    },
    {
      title: "Sunset Valley Land",
      description:
        "Excellent access and room for future planning or investment.",
      image: "../../assets/images/land/L4.jpg",
    },
    {
      title: "Riverbank Land",
      description:
        "Scenic setting with strong potential for private or mixed-use projects.",
      image: "../../assets/images/land/L5.webp",
    },
    {
      title: "Cedar Hills Plot",
      description: "A calm and accessible parcel ideal for future growth.",
      image: "../../assets/images/land/L1.webp",
    },
    {
      title: "Pine Grove Land",
      description:
        "Flexible lot size with open views and excellent planning options.",
      image: "../../assets/images/land/L2.webp",
    },
    {
      title: "Horizon Estate Land",
      description:
        "Promising location for development with room to create something special.",
      image: "../../assets/images/land/L3.webp",
    },
    {
      title: "Evergreen Plot",
      description:
        "An inviting land opportunity in a growing area with strong demand.",
      image: "../../assets/images/land/L4.jpg",
    },
    {
      title: "Oak Ridge Land",
      description:
        "A wide parcel with excellent potential for future investment.",
      image: "../../assets/images/land/L5.webp",
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
