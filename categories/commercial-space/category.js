const categoryContent = {
  title: "Commercial space listings",
  description:
    "Retail, service, and business spaces with high visibility and flexible layouts.",
  tag: "Commercial Space",
  items: [
    {
      title: "Retail Plaza Space",
      description:
        "High-footfall location with strong visibility for shops and cafes.",
      image: "../../assets/images/commercial-space/CM1.webp",
    },
    {
      title: "Main Street Unit",
      description:
        "Flexible commercial unit tailored for boutiques and service providers.",
      image: "../../assets/images/commercial-space/CM2.webp",
    },
    {
      title: "Market Avenue Shop",
      description:
        "Spacious frontage and a practical layout for daily operations.",
      image: "../../assets/images/commercial-space/CM3.jpg",
    },
    {
      title: "Harbor Retail Space",
      description:
        "Ideal for hospitality, retail, or customer-focused businesses.",
      image: "../../assets/images/commercial-space/CM4.webp",
    },
    {
      title: "Business Hub Unit",
      description: "Flexible floor plan for offices, studios, or showroom use.",
      image: "../../assets/images/commercial-space/CM1.webp",
    },
    {
      title: "Central Arcade Space",
      description:
        "A welcoming frontage with strong access to surrounding traffic.",
      image: "../../assets/images/commercial-space/CM2.webp",
    },
    {
      title: "Town Square Unit",
      description:
        "Bright interior and prime position for retail or service use.",
      image: "../../assets/images/commercial-space/CM3.jpg",
    },
    {
      title: "Grand Avenue Office Space",
      description:
        "A polished commercial environment with excellent curb appeal.",
      image: "../../assets/images/commercial-space/CM4.webp",
    },
    {
      title: "City Center Shop",
      description:
        "Built for retail success with a strong street-facing presence.",
      image: "../../assets/images/commercial-space/CM1.webp",
    },
    {
      title: "Signature Retail Unit",
      description: "A premium commercial space with flexible layout options.",
      image: "../../assets/images/commercial-space/CM2.webp",
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
            <a class="secondary-button" href="../../contact.html">Contact Agent</a>
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
