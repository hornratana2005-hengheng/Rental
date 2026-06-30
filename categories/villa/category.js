const categoryContent = {
  title: "Villa listings",
  description: "Premium villas for comfort, privacy, and upscale living.",
  tag: "Villa",
  items: [
    {
      title: "Golden Bay Villa",
      description:
        "A refined residence with private gardens and panoramic views.",
      image: "../../assets/images/villa/V1.webp",
    },
    {
      title: "Palm Crest Villa",
      description: "Open-plan luxury living with a spa-style outdoor retreat.",
      image: "../../assets/images/villa/V2.webp",
    },
    {
      title: "Seabreeze Villa",
      description:
        "Bright interiors and large terraces designed for summer entertaining.",
      image: "../../assets/images/villa/v3.webp",
    },
    {
      title: "Crownview Villa",
      description:
        "Elegant finishes and a striking exterior with premium comfort.",
      image: "../../assets/images/villa/v4.webp",
    },
    {
      title: "Azure Estate Villa",
      description:
        "A private hideaway with lush landscaping and generous living areas.",
      image: "../../assets/images/villa/V5.webp",
    },
    {
      title: "Verde Villa",
      description:
        "Perfect for relaxation with a pool, patio, and calm surroundings.",
      image: "../../assets/images/villa/V1.webp",
    },
    {
      title: "Ivory Ridge Villa",
      description:
        "Contemporary architecture paired with serene garden spaces.",
      image: "../../assets/images/villa/V2.webp",
    },
    {
      title: "Monarch Villa",
      description:
        "High-end design, privacy, and comfortable indoor-outdoor living.",
      image: "../../assets/images/villa/v3.webp",
    },
    {
      title: "Sapphire Villa",
      description:
        "Stylish architecture with an expansive outdoor lounge area.",
      image: "../../assets/images/villa/v4.webp",
    },
    {
      title: "Summit View Villa",
      description:
        "A luxurious villa with sweeping views and elegant detailing.",
      image: "../../assets/images/villa/V5.webp",
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
            <a class="secondary-button" href="../../contact.html" style="text-align: center;">Contact Agent</a>
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
