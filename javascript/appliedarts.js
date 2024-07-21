document.querySelectorAll('.text ul li').forEach(item => {
  item.addEventListener('click', () => {
      const scrollToId = item.getAttribute('data-scroll-to');
      const scrollToElement = document.getElementById(scrollToId);
      if (scrollToElement) {
          scrollToElement.scrollIntoView({ behavior: 'smooth' });
      }
  });
});  const button = document.getElementById('btn-graduation');
const tooltip = document.getElementById('tooltip');

button.addEventListener('mouseenter', showTooltip);
button.addEventListener('mouseleave', hideTooltip);

function showTooltip() {
    tooltip.style.display = 'block';
}

function hideTooltip() {
    tooltip.style.display = 'none';
}