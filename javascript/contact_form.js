document.getElementById('submitBtn').addEventListener('click', function() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('num').value;
    var number = document.getElementById('feedback').value;
    if (name && email && number && feedback) {
        alert('Thank you for your message, ' + name + '! We will get back to you soon.');
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all fields before submitting. ');
    }
});