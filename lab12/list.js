const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

const list = document.getElementById("fruit-list");

for (let i = 0; i < fruits.length; i++) {
  const listItem = document.createElement("li");
  
  listItem.innerText = fruits[i];
  
  list.appendChild(listItem);
}