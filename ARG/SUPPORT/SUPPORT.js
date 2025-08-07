// Smooth scroll to section function
    function scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Mobile hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
      hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('show');
        hamburger.classList.toggle('active');
      });

      // Close menu when clicking on a link
      navLinks.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav-link')) {
          navLinks.classList.remove('show');
          hamburger.classList.remove('active');
        }
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
          navLinks.classList.remove('show');
          hamburger.classList.remove('active');
        }
      });

      // Close menu on escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('show')) {
          navLinks.classList.remove('show');
          hamburger.classList.remove('active');
        }
      });
    }

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.support-card, .step-card, .helpline-card').forEach(el => {
      observer.observe(el);
    });

    // Smooth scroll for CTA button
    document.querySelector('.cta-button').addEventListener('click', (e) => {
      e.preventDefault();
      scrollToSection('support-types');
    });

    // Handle navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
          const sectionId = href.substring(1);
          scrollToSection(sectionId);
        }
      });
    });

    // Optimize scroll performance
    let ticking = false;
    function updateScrollPosition() {
      // Add any scroll-based functionality here
      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollPosition);
        ticking = true;
      }
    });

    // Preload critical resources
    const criticalImages = [
      // Add any critical images here if needed
    ];

    criticalImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });