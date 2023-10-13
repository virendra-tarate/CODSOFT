//JS Here

// Function to perform the calculation
function calculate() {
    const display = document.getElementById('display-field');
    const expression = display.value;
    
    try {
        // Use the eval function to calculate the result of the expression
        const result = eval(expression);
        display.value = result;
    } catch (error) {
        // Handle any errors (e.g., division by zero)
        display.value = 'Error';
    }
}

// Attach click event handlers to buttons
document.querySelectorAll('button').forEach(function(button) {
    button.addEventListener('click', function() {
        const value = button.value;
        const display = document.getElementById('display-field');

        if (value === 'C') {
            // Clear the display
            display.value = '';
        } else if (value === '=') {
            // Calculate the result when the equals button is pressed
            calculate();
        } else {
            // Append the clicked value to the display
            display.value += value;
        }
    });
});
