document.querySelectorAll('.text ul li').forEach(item => 
  {
  item.addEventListener('click', () => 
    {
      const scrollToId = item.getAttribute('data-scroll-to');
      const scrollToElement = document.getElementById(scrollToId);
      if (scrollToElement) {
          scrollToElement.scrollIntoView({ behavior: 'smooth' });
      }
  });
});  
document.getElementById('btn-graduation-professional').addEventListener('mouseenter', () => 
{
  document.getElementById('tooltip-professional').style.display = 'block';
});
document.getElementById('btn-graduation-professional').addEventListener('mouseleave', () => 
{
  document.getElementById('tooltip-professional').style.display = 'none';
});

document.getElementById('btn-graduation-graduation').addEventListener('mouseenter', () => 
  {
  document.getElementById('tooltip-graduation').style.display = 'block';
});
document.getElementById('btn-graduation-graduation').addEventListener('mouseleave', () =>
 {
  document.getElementById('tooltip-graduation').style.display = 'none';
});
document.getElementById('btn-graduation-degree').addEventListener('mouseenter', () => 
{
  document.getElementById('tooltip-degree').style.display = 'block';
});
document.getElementById('btn-graduation-degree').addEventListener('mouseleave', () => 
{
  document.getElementById('tooltip-degree').style.display = 'none';
});
document.getElementById('btn-graduation-management').addEventListener('mouseenter', () => 
{
  document.getElementById('tooltip-management').style.display = 'block';
});
document.getElementById('btn-graduation-management').addEventListener('mouseleave', () =>
{
  document.getElementById('tooltip-management').style.display = 'none';
});

document.getElementById('btn-graduation-architecture').addEventListener('mouseenter', () => 
{
  document.getElementById('tooltip-architecture').style.display = 'block';
});
document.getElementById('btn-graduation-architecture').addEventListener('mouseleave', () =>
 {
  document.getElementById('tooltip-architecture').style.display = 'none';
});

