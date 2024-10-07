document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('h2, h3, h4, h5, h6');
    headers.forEach(function(header) {
      const previousElement = header.previousElementSibling;
      const lastChildElement = header.parentElement.lastElementChild;
      
      if (previousElement || header === lastChildElement) {
        header.style.pageBreakBefore = 'always';
      }
    });
  });
  