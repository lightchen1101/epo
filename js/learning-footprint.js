document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.expand-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const img = btn.querySelector('img');
      const currentRow = btn.closest('tr');
      const nextRow = currentRow.nextElementSibling;

      if (nextRow && nextRow.classList.contains('table-expand-row')) {
        const isExpanded = nextRow.style.display === 'table-row';
        nextRow.style.display = isExpanded ? 'none' : 'table-row';
        img.classList.toggle('rotated', !isExpanded);
        img.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
        currentRow.classList.toggle('active-row', !isExpanded);
      }
    });
  });
});