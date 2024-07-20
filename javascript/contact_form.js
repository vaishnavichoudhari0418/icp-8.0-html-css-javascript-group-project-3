document.getElementById('submitBtn').addEventListener('click', function() {
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('num').value;

    // Check if fields are filled
    if (name && email && number) {
        // Display thank you message
        alert('Thank you for your message, ' + name + '! We will get back to you soon.');
        // Optionally, clear the form after submission
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all fields before submitting.');
    }
});