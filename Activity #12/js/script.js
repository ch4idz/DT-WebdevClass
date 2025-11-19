// Example vaccine data with prices
const vaccines = [
  { name: "BCG", price: 400 },
  { name: "Hepa B", price: 600 },
  { name: "Pentavalent", price: 1200 },
  { name: "OPV", price: 300 },
  { name: "IPV", price: 800 },
];

let currentList = [...vaccines]; // copy of vaccines

// Function to display vaccines
function displayVaccines(list) {
  const ul = document.getElementById("vaccineList");
  ul.innerHTML = ""; // clear old list
  list.forEach((v) => {
    const li = document.createElement("li");
    li.textContent = `${v.name} - ₱${v.price}`;
    ul.appendChild(li);
  });
}

// Filter button: show vaccines priced above ₱500
function filterVaccines() {
  currentList = currentList.filter((v) => v.price > 500);
  displayVaccines(currentList);
}

// Sort button: sort vaccines by price ascending
function sortVaccines() {
  currentList = [...currentList].sort((a, b) => a.price - b.price);
  displayVaccines(currentList);
}

// Reset button: restore original list
function resetVaccines() {
  currentList = [...vaccines];
  displayVaccines(currentList);
}

displayVaccines(currentList);
