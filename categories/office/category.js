const categoryContent = {
  title: "Office listings",
  description:
    "Professional office spaces for startups, teams, and growing businesses.",
  tag: "Office",
  items: [
    {
      title: "Executive Office",
      description:
        "Premium workspace with modern interiors and professional meeting areas.",
      image: "../../assets/images/office/O1.jpg",
    },
    {
      title: "Harbor Workhub",
      description:
        "Flexible desks and a polished environment for growing teams.",
      image: "../../assets/images/office/O2.webp",
    },
    {
      title: "Skyline Studio",
      description:
        "Bright open-plan office with high-speed connectivity and views.",
      image: "../../assets/images/office/O3.webp",
    },
    {
      title: "North Avenue Office",
      description:
        "A smart and elegant workspace with client-ready meeting rooms.",
      image: "../../assets/images/office/O4.webp",
    },
    {
      title: "Centerline Workspace",
      description:
        "Flexible office layout suited to startups and boutique firms.",
      image: "../../assets/images/office/O5.webp",
    },
    {
      title: "Monarch Office Suite",
      description:
        "Spacious and refined with private offices and collaboration areas.",
      image: "../../assets/images/office/O6.webp",
    },
    {
      title: "Riverfront Office",
      description:
        "A calm professional setting close to transport and business parks.",
      image: "../../assets/images/office/O7.webp",
    },
    {
      title: "Lumen Office",
      description:
        "Excellent lighting, modern finishes, and team-friendly layout.",
      image: "../../assets/images/office/O8.webp",
    },
    {
      title: "Urban Loft Office",
      description:
        "Elegant and flexible workspace for creative and professional teams.",
      image: "../../assets/images/office/O9.webp",
    },
    {
      title: "Crest Office Studio",
      description:
        "A polished workspace designed for focus and client presentation.",
      image: "../../assets/images/office/O10.webp",
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
