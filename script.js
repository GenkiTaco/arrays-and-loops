document.addEventListener('DOMContentLoaded', function() {
    // Ensure the DOM is fully loaded before running the script

    // Create a Todo List
    // Create an array todoList with three tasks.
    let todoList = ['Laundry', 'Shopping', 'Dishes']; // Initialize the todo list array
    const taskList = document.getElementById('taskList'); // Get the task list element
    const taskInput = document.getElementById('task'); // Get the task input element
    const addTaskButton = document.getElementById('addTask'); // Get the add task button

    function renderTodoList() {
        taskList.innerHTML = ''; // Clear the existing list
        todoList.forEach(task => {
            const li = document.createElement('li'); // Create a new list item
            li.textContent = task; // Set the text content to the task
            taskList.appendChild(li); // Append the list item to the task list
        });
    }

    addTaskButton.addEventListener('click', function() {
        const task = taskInput.value; // Get the value of the task input
        if (task) {
            todoList.push(task); // Add the task to the todo list
            renderTodoList(); // Render the updated todo list
            taskInput.value = ''; // Clear the input field
            console.log(todoList); // Log the updated todo list
        }
    });

    taskInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' && taskInput.value) {
            addTaskButton.click(); // Trigger the add task button click event
        }
    });

    document.getElementById('removeTask').addEventListener('click', function() {
        if (todoList.length > 0) {
            todoList.shift(); // Remove the first task from the todo list
            renderTodoList(); // Render the updated todo list
            console.log(todoList); // Log the updated todo list
        }
    });

    // Initial render of the todo list
    renderTodoList(); // Render the initial todo list

    // Count Even Numbers
    // Create an array of numbers.
    const numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Initialize the numbers list array
    const numbersListElement = document.getElementById('numbersList'); // Get the numbers list element
    const countEvenNumbersButton = document.getElementById('countEvenNumbers'); // Get the count even numbers button
    const evenNumbersElement = document.getElementById('evenNumbers'); // Get the even numbers display element

    function renderNumbersList(numbers) {
        numbersListElement.textContent = numbers.join(', '); // Display the numbers array
    }

    countEvenNumbersButton.addEventListener('click', function() {
        const evenNumbers = numbersList.filter(number => number % 2 === 0); // Filter even numbers
        evenNumbersElement.textContent = evenNumbers.join(', '); // Display the even numbers array
        console.log(`Count of even numbers: ${evenNumbers.length}`); // Log the count of even numbers
    });

    // Initial render of the numbers list
    renderNumbersList(numbersList); // Render the initial numbers list

    // Reverse an Array
    // Create an array.
    // Write a loop to reverse its elements.
    // Log the reversed array.
    const originalArray = [1, 2, 3, 4, 5]; // Initialize the original array
    const originalElement = document.getElementById('original'); // Get the original array display element
    const reversedElement = document.getElementById('reversed'); // Get the reversed array display element
    const reverseButton = document.getElementById('reverseArray'); // Get the reverse array button

    originalElement.textContent = originalArray.join(', '); // Display the original array

    reverseButton.addEventListener('click', function() {
        const reversedArray = []; // Initialize the reversed array
        for (let i = originalArray.length - 1; i >= 0; i--) {
            reversedArray.push(originalArray[i]); // Add elements to the reversed array in reverse order
        }
        reversedElement.textContent = reversedArray.join(', '); // Display the reversed array
        console.log('Reversed array:', reversedArray); // Log the reversed array
    });

    // Find the Largest Number
    // Create an array of numbers.
    // Write a loop to find the largest number in the array.
    // Log the largest number.
    const numberArray = [10, 20, 30, 40, 50]; // Initialize the number array
    const numberElement = document.getElementById('numberArray'); // Get the number array display element
    const largestElement = document.getElementById('largestNumber'); // Get the largest number display element
    const findLargestButton = document.getElementById('findLargestNumber'); // Get the find largest number button

    function renderNumberArray() {
        numberElement.textContent = numberArray.join(', '); // Display the number array
    }

    findLargestButton.addEventListener('click', function() {
        let largestNumber = numberArray[0]; // Initialize the largest number
        for (let i = 1; i < numberArray.length; i++) {
            if (numberArray[i] > largestNumber) {
                largestNumber = numberArray[i]; // Update the largest number
            }
        }
        largestElement.textContent = largestNumber; // Display the largest number
        console.log('Largest number:', largestNumber); // Log the largest number
    });

    // Initial render of the number array
    renderNumberArray(); // Render the initial number array

    // Dynamic Greeting
    // Create a function greetUsers(array).
    // Use a loop to log a personalized greeting for each name in the array.
    const users = ['John', 'Mary', 'Caleb']; // Initialize the users array
    const userListElement = document.getElementById('userList'); // Get the user list element
    const greetButton = document.getElementById('greetUsers'); // Get the greet users button

    function renderUserList() {
        userListElement.innerHTML = ''; // Clear the existing list
        users.forEach(user => {
            const li = document.createElement('li'); // Create a new list item
            li.textContent = user; // Set the text content to the user
            userListElement.appendChild(li); // Append the list item to the user list
        });
    }

    greetButton.addEventListener('click', function() {
        const listItems = userListElement.getElementsByTagName('li'); // Get all list items
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].textContent = `Hello, ${users[i]}!`; // Replace the list item content with the greeting
            console.log(`Hello, ${users[i]}!`); // Log the personalized greeting
        }
    });

    // Initial render of the user list
    renderUserList(); // Render the initial user list
});