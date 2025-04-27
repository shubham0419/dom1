const categorySelect = document.getElementById("category");
const categories = [
  { id: 1, name: "Technology" },
  { id: 2, name: "Travel" },
  { id: 3, name: "Food" },
  { id: 4, name: "Lifestyle" },
  { id: 5, name: "Business" },
];

populateCategoryDropdown()

function populateCategoryDropdown() {
  
  while (categorySelect.options.length > 1) {
    categorySelect.remove(1);
  }

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.id;
    option.textContent = category.name;
    categorySelect.appendChild(option);
  });
}
