function getCurrentDate() {
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('india', options);
}

document.getElementById('current-date').textContent = getCurrentDate();