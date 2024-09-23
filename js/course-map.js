  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.expand-title img').forEach(img => {
      img.addEventListener('click', () => {
        const subContainer = img.closest('.expand-container').querySelector('.expand-sub-container');
        if (subContainer) {
          const isExpanded = subContainer.style.display === 'block';
          subContainer.style.display = isExpanded ? 'none' : 'block';
          img.src = isExpanded ? 'images/plus.svg' : 'images/plus-1.svg';
        }
      });
    });
  });