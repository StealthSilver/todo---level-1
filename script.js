

// Get references to elements
const inputField = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Function to add a new to-do item
function addTodo() {
    const task = inputField.value.trim();
    if (task === '') return; // Don't add empty tasks

    // Create new list item
    const listItem = document.createElement('li');

    // Add task text
    listItem.textContent = task;

    // Add Complete button
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.classList.add('complete-btn');
    completeButton.onclick = () => {
        listItem.classList.toggle('completed');
    };

    // Add Delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.onclick = () => {
        listItem.remove();
    };

    // Append buttons to the list item
    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);

    // Append list item to the to-do list
    todoList.appendChild(listItem);

    // Clear input field
    inputField.value = '';
}

// Add event listener to Add button
addButton.addEventListener('click', addTodo);

// Add event listener for Enter key
inputField.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTodo();
    }
});