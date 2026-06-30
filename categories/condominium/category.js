const categoryContent = {
  title: "Condominium listings",
  description:
    "Modern condos with building amenities and city-centered convenience.",
  tag: "Condominium",
  items: [
    {
      title: "Skyline Condo",
      description:
        "A polished condo with security, gym access, and city views.",
      image: "../../assets/images/body.png",
    },
    {
      title: "Harbor View Residence",
      description:
        "Contemporary interior finishes and a convenient waterfront location.",
      image: "../../assets/images/body.png",
    },
    {
      title: "Metro Grand Condo",
      description:
        "Smart layout with communal rooftop facilities and lounge space.",
      image: "../../assets/images/body.png",
    },
    {
      title: "Central Park Condo",
      description:
        "Elegant interiors built for comfort and effortless city living.",
      image: "../../assets/images/body.png",
    },
    {
      title: "Riverline Residence",
      description:
        "Bright open-plan spaces with premium fixtures and concierge service.",
      image: "../../assets/images/body.png",
    },
    {
      title: "Luxe Tower Condo",
      description:
        "Modern finishes in a secure building with a full amenity package.",
      image: "../../assets/images/body.png",
    },
    {
      title: "Summit Plaza Condo",
      description:
        "Flexible layout for professionals who value convenience and style.",
      image: "../../assets/images/body.png",
    },
    {
      title: "Garden View Condo",
      description:
        "A relaxed condo with green views and easy access to shopping districts.",
      image: "../../assets/images/body.png",
    },
    {
      title: "Silverline Residence",
      description:
        "Contemporary living with a practical layout and quiet surroundings.",
      image: "../../assets/images/body.png",
    },
    {
      title: "Crestline Condo",
      description:
        "Ideal for urban lifestyle with elegant common areas and secure entry.",
      image: "../../assets/images/body.png",
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
