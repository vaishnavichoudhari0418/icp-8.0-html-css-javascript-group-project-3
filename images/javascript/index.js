document.getElementById('dropdown-items').addEventListener('click', function() {
    document.getElementById('navMenu').classList.toggle('active');
});



function changeImage(imageName) {
    const mainImage = document.getElementById('main-product-img');
    mainImage.src=imageName;
}