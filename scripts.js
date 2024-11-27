document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.hero__cta');
    ctaButton.addEventListener('click', () => {
      alert('Button clicked!');
    });
  });