// DOM Elements
const categoryContainer = document.getElementById('category-list');
const featuredFarmersContainer = document.getElementById('featured-farmers');
const freshProduceContainer = document.getElementById('fresh-produce');

// Render Categories
function renderCategories() {
    if (!categoryContainer) return;
    categoryContainer.innerHTML = categories.map(cat => `
    <div class="category-item">
      <div class="cat-icon">${cat.icon}</div>
      <span class="cat-name">${cat.name}</span>
    </div>
  `).join('');
}

// Render Featured Farmers
function renderFarmers() {
    if (!featuredFarmersContainer) return;
    featuredFarmersContainer.innerHTML = farmers.map(farmer => `
    <div class="farmer-card">
      <img src="${farmer.image}" alt="${farmer.name}" class="farmer-img">
      <div class="farmer-info">
        <div class="farmer-name">${farmer.name}</div>
        <div class="farmer-loc">📍 ${farmer.location}</div>
        <div class="rating">⭐ ${farmer.rating} (${farmer.reviews} reviews)</div>
      </div>
    </div>
  `).join('');
}

// Render Produce (Home Page Grid)
function renderProduce() {
    if (!freshProduceContainer) return;
    freshProduceContainer.innerHTML = products.slice(0, 4).map(prod => `
    <div class="product-card">
      <img src="${prod.image}" alt="${prod.name}" class="product-img">
      <div class="product-details">
        <div class="product-name">${prod.name}</div>
        <div class="product-farmer">from ${farmers.find(f => f.id === prod.farmerId)?.name}</div>
        <div class="product-price">${prod.price} / ${prod.unit}</div>
      </div>
    </div>
  `).join('');
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderFarmers();
    renderProduce();
});
