// script.js
function saveInput(category) {
    var userInput = document.getElementById(category + 'Input').value;
    localStorage.setItem(category + 'Input', userInput);
    document.getElementById(category + 'Input').value = '';

    displayReflection(category);
}

function displayReflection(category) {
    var reflection = localStorage.getItem(category + 'Reflection');
    if (reflection) {
        document.getElementById(category + 'Reflection').innerText = reflection;
    } else {
        document.getElementById(category + 'Reflection').innerText = 'No reflections yet.';
    }
}

// Display reflections on page load
displayReflection('discipline');
// Repeat for self-improvement and kindness
