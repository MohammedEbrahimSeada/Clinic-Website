// script.js

// Get the form and confirmation message elements
const form = document.getElementById('bookingForm');
const confirmationMessage = document.getElementById('confirmationMessage');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way
    
    // Validate the form fields (optional, since HTML validation is already used)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (!name || !email || !phone || !date || !time) {
        alert('Please fill out all fields.');
        return;
    }

    // Show the confirmation message
    confirmationMessage.classList.remove('hidden');
    
    // Optionally, reset the form
    form.reset();
});
