// Selecting elements from the DOM
const itemField = document.getElementById("item-field");
const caloriesField = document.getElementById("calories-field");
const addBtn = document.querySelector(".add-btn");
const resetBtn = document.querySelector(".reset-btn");
const updateBtn = document.querySelector(".update-btn");
const deleteBtn = document.querySelector(".delete-btn");
const backBtn = document.querySelector(".back-btn");
const totalCalories = document.getElementById("total-cal");
const itemList = document.getElementById("item-lists");

let isEditState = false;
let currentItem = null;

// Event listener for adding an item
addBtn.addEventListener("click", addItem);

// Event listener for resetting fields
resetBtn.addEventListener("click", resetFields);

// Event listener for update button
updateBtn.addEventListener("click", updateItem);

// Event listener for delete button
deleteBtn.addEventListener("click", deleteItem);

// Event listener for back button
backBtn.addEventListener("click", () => {
  toggleEditState(false);
  resetFields();
});

// Function to add an item
function addItem(event) {
  event.preventDefault();

  const item = itemField.value.trim();
  const calories = parseInt(caloriesField.value);

  if (!item || isNaN(calories) || calories <= 0) {
    alert("Please enter valid values for item and calories.");
    return;
  }

  const newItem = {
    id: generateId(),
    item,
    calories,
  };

  if (isEditState) {
    updateExistingItem(newItem);
  } else {
    // Append new item to the list
    const itemElement = createItemElement(newItem);
    itemList.appendChild(itemElement);
  }

  calculateTotalCalories();
  resetFields();
}

// Function to generate a unique ID
function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

// Function to create an item element
function createItemElement(newItem) {
  const li = document.createElement("li");
  li.classList.add("item");
  li.innerHTML = `
    <span>${newItem.item}</span>
    <span>${newItem.calories} kcal</span>
    <div>
      <button class="edit-btn" onclick="editItem('${newItem.id}')"><i class="fas fa-edit"></i></button>
      <button class="delete-btn" onclick="deleteItem('${newItem.id}')"><i class="fas fa-trash-alt"></i></button>
    </div>
  `;
  li.setAttribute("data-id", newItem.id);
  return li;
}

// Function to edit an existing item
function editItem(id) {
  const selectedItem = document.querySelector(`li[data-id="${id}"]`);
  const selectedName =
    selectedItem.querySelector("span:first-child").textContent;
  const selectedCalories = parseInt(
    selectedItem.querySelector("span:nth-child(2)").textContent
  );

  itemField.value = selectedName;
  caloriesField.value = selectedCalories;

  toggleEditState(true);
  currentItem = {
    id,
    name: selectedName,
    calories: selectedCalories,
  };
}

// Function to update an existing item
function updateItem(event) {
  event.preventDefault();

  const updatedItem = {
    id: currentItem.id,
    item: itemField.value.trim(),
    calories: parseInt(caloriesField.value),
  };

  if (
    !updatedItem.item ||
    isNaN(updatedItem.calories) ||
    updatedItem.calories <= 0
  ) {
    alert("Please enter valid values for item and calories.");
    return;
  }

  updateExistingItem(updatedItem);
  calculateTotalCalories();
  resetFields();
}

// Function to update an existing item in the list
function updateExistingItem(updatedItem) {
  const selectedItem = document.querySelector(
    `li[data-id="${updatedItem.id}"]`
  );
  selectedItem.innerHTML = `
    <span>${updatedItem.item}</span>
    <span>${updatedItem.calories} kcal</span>
    <div>
      <button class="edit-btn" onclick="editItem('${updatedItem.id}')"><i class="fas fa-edit"></i></button>
      <button class="delete-btn" onclick="deleteItem('${updatedItem.id}')"><i class="fas fa-trash-alt"></i></button>
    </div>
  `;
  currentItem = null;
  toggleEditState(false);
}

// Function to delete an item
function deleteItem(id) {
  const selectedItem = document.querySelector(`li[data-id="${id}"]`);
  selectedItem.remove();
  calculateTotalCalories();
  resetFields();
}

// Function to calculate total calories
function calculateTotalCalories() {
  let total = 0;
  const itemElements = itemList.querySelectorAll("li");

  itemElements.forEach((item) => {
    const calories = parseInt(
      item.querySelector("span:nth-child(2)").textContent
    );
    total += calories;
  });

  totalCalories.textContent = total;
}

// Function to reset input fields
function resetFields() {
  itemField.value = "";
  caloriesField.value = "";
}

// Function to toggle edit state
function toggleEditState(state) {
  isEditState = state;
  const defaultState = document.querySelector(".btn-default-state");
  const editState = document.querySelector(".btn-edit-state");

  if (state) {
    defaultState.style.display = "none";
    editState.style.display = "block";
  } else {
    defaultState.style.display = "block";
    editState.style.display = "none";
  }
}
