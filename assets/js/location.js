const sourceData = typeof allListings !== "undefined" ? allListings : [];

const rentals = sourceData.map((item, index) => ({
  id: item.id ?? index + 1,
  tag: item.tag,
  title: item.title,
  desc: item.description ?? item.desc ?? "",
  image: item.image.replace(/^\.\.\/assets\//, "assets/"),
  bed: item.bed ?? "",
  location: item.location ?? "",
}));

const params = new URLSearchParams(window.location.search);
const keywordInput = document.querySelector('input[name="keyword"]');
const locationInput = document.querySelector('input[name="location"]');
const typeSelect = document.querySelector('select[name="type"]');
const cardsContainer = document.getElementById("cards");
const selectedLocation = params.get("location")?.trim();
const selectedType = params.get("type")?.trim();
const selectedKeyword = params.get("keyword")?.trim();

if (keywordInput && selectedKeyword) {
  keywordInput.value = selectedKeyword;
}

if (locationInput && selectedLocation) {
  locationInput.value = selectedLocation;
}

if (typeSelect && selectedType) {
  typeSelect.value = selectedType;
}

function renderCards(list) {
  if (!cardsContainer) return;

  if (list.length === 0) {
    cardsContainer.innerHTML =
      "<p>No rentals found for that location or category. Please try a different search.</p>";
    return;
  }

  cardsContainer.innerHTML = list
    .map(
      (rental) => `
        <article class="card-item">
            <img src="${rental.image}" alt="${rental.title}">
            <div class="card-content">
                <span class="card-tag">${rental.tag}</span>
                <h3 class="card-title">${rental.title}</h3>
                <p class="card-text">${rental.desc}</p>
                <div class="card-meta">
                    <span><i class="fa-solid fa-bed"></i> ${rental.bed}</span>
                    <span><i class="fa-solid fa-location-dot"></i> ${rental.location}</span>
                </div>
                <a class="secondary-button" style="text-align:center;" href="detail.html?id=${rental.id}">View Details</a>
            </div>
        </article>
      `,
    )
    .join("");
}

const filteredRentals = rentals.filter((rental) => {
  const matchesLocation = selectedLocation
    ? rental.location.toLowerCase().includes(selectedLocation.toLowerCase())
    : true;
  const matchesType = selectedType
    ? rental.tag.toLowerCase().includes(selectedType.toLowerCase())
    : true;
  const matchesKeyword = selectedKeyword
    ? [rental.title, rental.desc, rental.tag, rental.location]
        .join(" ")
        .toLowerCase()
        .includes(selectedKeyword.toLowerCase())
    : true;

  return matchesLocation && matchesType && matchesKeyword;
});

renderCards(filteredRentals);
