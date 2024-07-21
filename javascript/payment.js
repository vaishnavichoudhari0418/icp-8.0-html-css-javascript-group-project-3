function discount() {

    const min = 1;
    const max = 11; // Since we want a range from 1 to 10 inclusive
    
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    const discountText = document.getElementById("discount");
    

    discountText.textContent = `Congratulations! You get a ${randomNumber}% discount!`;
}