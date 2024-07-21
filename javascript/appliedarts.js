document.querySelectorAll('.text ul li').forEach(item => {
  item.addEventListener('click', () => {
      const scrollToId = item.getAttribute('data-scroll-to');
      const scrollToElement = document.getElementById(scrollToId);
      if (scrollToElement) {
          scrollToElement.scrollIntoView({ behavior: 'smooth' });
      }
  });
});