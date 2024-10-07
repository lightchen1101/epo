document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname.split('/').pop();
  const links = document.querySelectorAll('a');

  links.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
      const img = link.querySelector('img');
      if (img) {
        const srcParts = img.src.split('/');
        const filename = srcParts.pop();
        const newFilename = 'blue-' + filename;
        srcParts.push(newFilename);
        img.src = srcParts.join('/');
      }
    }
  });
  const updateDisplay = () => {
    if (window.matchMedia('(max-width: 600px)').matches) {
      document.querySelectorAll('.phone').forEach(el => el.style.display = 'block');
      document.querySelectorAll('.desktop').forEach(el => el.style.display = 'none');
    } else {
      document.querySelectorAll('.phone').forEach(el => el.style.display = 'none');
      document.querySelectorAll('.desktop').forEach(el => el.style.display = 'block');
    }
  };

  updateDisplay();
  window.addEventListener('resize', updateDisplay);

});
