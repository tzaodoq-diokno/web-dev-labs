const menuItems = [
  {
    name: "Dirty Spanish Latte",
    description: "A creamy espresso drink with a blend of sweet cinnamon and strong coffee flavor.",
    price: 160
  },
  {
    name: "Deconstructed Burrito",
    description: "All your burrito favorites—rice, beans, veggies, and meat—served in a bowl for easy enjoyment.",
    price: 220
  },
  {
    name: "Protein-Rich Coffee Smoothie",
    description: "A healthy blend of espresso, milk, and protein powder to fuel your body and mind.",
    price: 180
  }
];

const menuList = document.getElementById("menu-list");

menuItems.forEach(item => {
  const card = document.createElement("div");
  card.className = "col-md-4";

  card.innerHTML = `
    <div class="card shadow-sm h-100">
      <div class="card-body text-center">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.description}</p>
        <p><strong>₱${item.price}</strong></p>
        <button class="btn btn-primary order-btn" data-item="${item.name}">Order Now</button>
      </div>
    </div>
  `;

  menuList.appendChild(card);
});

document.addEventListener("click", e => {
  if (e.target.classList.contains("order-btn")) {
    const item = e.target.getAttribute("data-item");
    alert(`You ordered ${item}!`);

    const orderList = document.getElementById("orderList");
    const listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.textContent = item;
    orderList.appendChild(listItem);
  }
});
