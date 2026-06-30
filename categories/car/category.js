const categoryContent = {
  title: "Car listings",
  description:
    "Flexible car rentals for city errands, business trips, and family travel.",
  tag: "Car",
  items: [
    {
      title: "Toyota Prius Hybrid",
      description: "Fuel-efficient sedan for city errands and weekend drives.",
      image: "../../assets/images/car/C3.webp",
    },
    {
      title: "Honda Civic Sedan",
      description:
        "Comfortable daily rental with smooth handling and modern features.",
      image: "../../assets/images/car/C4.webp",
    },
    {
      title: "Ford Ranger Pickup",
      description: "Reliable pickup with extra cargo room for work or travel.",
      image: "../../assets/images/car/C5.webp",
    },
    {
      title: "Hyundai Staria Van",
      description: "Spacious van for families, groups, and airport transfers.",
      image: "../../assets/images/car/C7.webp",
    },
    {
      title: "Mazda CX-5 SUV",
      description:
        "Premium SUV with comfortable seating and confident road manners.",
      image: "../../assets/images/car/C3.webp",
    },
    {
      title: "Lexus RX Comfort",
      description:
        "Refined SUV rental with quiet cabin space and polished details.",
      image: "../../assets/images/car/C4.webp",
    },
    {
      title: "Nissan Almera",
      description: "Simple, affordable sedan for flexible daily transportation.",
      image: "../../assets/images/car/C5.webp",
    },
    {
      title: "Kia Carnival",
      description:
        "Roomy multi-passenger rental with luggage space and easy access.",
      image: "../../assets/images/car/C7.webp",
    },
    {
      title: "Toyota Fortuner",
      description: "Strong SUV suited to city roads and out-of-town journeys.",
      image: "../../assets/images/car/C3.webp",
    },
    {
      title: "Mercedes C-Class",
      description: "Elegant sedan for business travel and special appointments.",
      image: "../../assets/images/car/C4.webp",
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
