// RESOURCES.JS - CLEANED VERSION

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Mobile hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  });
}

// Header scroll effect
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
    header.style.background = 'rgba(255, 255, 255, 0.98)';
    header.style.boxShadow = '0 2px 20px rgba(92, 168, 227, 0.2)';
  } else {
    header.style.background = 'rgba(255, 255, 255, 0.95)';
    header.style.boxShadow = '0 2px 10px rgba(92, 168, 227, 0.15)';
  }
});

// CTA Button click handlers
document.addEventListener('DOMContentLoaded', () => {
  const ctaButtons = document.querySelectorAll('.cta-btn');
  
  ctaButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Add click effect
      this.style.transform = 'translateY(-1px) scale(0.98)';
      
      setTimeout(() => {
        this.style.transform = '';
      }, 150);
      
      // Handle different button actions based on text content
      const buttonText = this.textContent.trim();
      
      switch(buttonText) {
        case 'Find Support Services':
          console.log('Redirecting to support services...');
          break;
        case 'Share These Resources':
          // Add share functionality
          if (navigator.share) {
            navigator.share({
              title: 'AwakeAid Resources',
              text: 'Check out these important resources about substance abuse awareness and prevention.',
              url: window.location.href
            });
          } else {
            // Fallback for browsers that don't support Web Share API
            const url = encodeURIComponent(window.location.href);
            const text = encodeURIComponent('Check out these important resources about substance abuse awareness and prevention.');
            window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
          }
          break;
        case 'Get Involved':
          console.log('Redirecting to volunteer opportunities...');
          break;
      }
    });
  });
});