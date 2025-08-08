const products = [
  { name: "Laptop", category: "electronics", price: 500 },
  { name: "Shirt", category: "clothing", price: 20 },
  { name: "Phone", category: "electronics", price: 300 },
  { name: "Jeans", category: "clothing", price: 40 }
];

function displayProducts(list) {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";
  list.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `<h3>${p.name}</h3><p>₹${p.price}</p>`;
    container.appendChild(div);
  });
}

document.getElementById("categoryFilter").addEventListener("change", filterAndSort);
document.getElementById("sortOption").addEventListener("change", filterAndSort);

function filterAndSort() {
  let filtered = [...products];
  const category = document.getElementById("categoryFilter").value;
  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  const sortOption = document.getElementById("sortOption").value;
  if (sortOption === "priceLowHigh") {
    filtered.sort((a, b) => a.price - b.price);
  } else {
    filtered.sort((a, b) => b.price - a.price);
  }

  displayProducts(filtered);
}

displayProducts(products);
