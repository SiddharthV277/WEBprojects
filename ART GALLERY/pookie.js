document.addEventListener('DOMContentLoaded', () => {
  
    const bubbleContainer = document.querySelector('.bubble-background');
    const colors = [
        'rgba(196, 210, 226, 0.6)',  // Light Blue-Gray
        'rgba(221, 221, 221, 0.5)',  // Light Neutral Gray
        'rgba(171, 184, 196, 0.6)',  // Medium Blue-Gray
        'rgba(243, 243, 243, 0.5)'   // Very Light Gray
    ];

    for (let i = 0; i < 30; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');

        const size = Math.random() * 50 + 20;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.bottom = `${Math.random() * 100}vh`;
        bubble.style.animationDuration = `${Math.random() * 5 + 5}s`;

        bubbleContainer.appendChild(bubble);
    }

  
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
          alert('Item added to cart!');
          button.innerText = 'Added to Cart';
          button.disabled = true;
          setTimeout(() => {
              button.innerText = 'Add to Cart';
              button.disabled = false;
          }, 2000);
      });
  });
});
