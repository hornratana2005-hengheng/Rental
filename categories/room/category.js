const categoryContent = {
  title: "Room listings",
  description: "Affordable rooms for students, solo renters, and short stays.",
  tag: "Room",
  items: [
    {
      title: "Private Room",
      description:
        "A practical room with essential amenities and easy access to daily essentials.",
      image: "../../assets/images/room/R1.jpg",
    },
    {
      title: "Student Room",
      description:
        "Budget-friendly and close to campus, transit, and local shops.",
      image: "../../assets/images/room/R2.webp",
    },
    {
      title: "Shared Studio Room",
      description:
        "A relaxed shared space designed for comfort and community living.",
      image: "../../assets/images/room/R3.webp",
    },
    {
      title: "City Room",
      description:
        "A compact stay with a comfortable bed and useful workspace.",
      image: "../../assets/images/room/R4.webp",
    },
    {
      title: "Garden Room",
      description:
        "Bright and quiet with a calm atmosphere and simple furnishings.",
      image: "../../assets/images/room/R5.webp",
    },
    {
      title: "Executive Room",
      description:
        "Designed for short stays with a tidy layout and modern comforts.",
      image: "../../assets/images/room/R6.webp",
    },
    {
      title: "Comfort Room",
      description:
        "A warm and welcoming room with secure access and a practical setup.",
      image: "../../assets/images/room/R7.jpg",
    },
    {
      title: "Studio Room",
      description:
        "Flexible room for solo living with a cozy and efficient layout.",
      image: "../../assets/images/room/R1.jpg",
    },
    {
      title: "Quiet Room",
      description: "Ideal for concentration and rest with a peaceful feel.",
      image: "../../assets/images/room/R2.webp",
    },
    {
      title: "Boutique Room",
      description:
        "A neat and stylish room with all the essentials for daily comfort.",
      image: "../../assets/images/room/R3.webp",
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
