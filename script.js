document.addEventListener('DOMContentLoaded', () => {
  const flavorMenu = document.querySelectorAll('.flavor');
  const display = document.getElementById('display-area');

  const prices = {
    "Chocolate Truffle": "₹200",
    "Almond Classic": "₹189",
    "Brownie Crunch": "₹249",
    "Double Caramel": "₹199",
    "Cookie Duet": "₹159",
    "Dark Chocolate": "₹249",
    "White Chocolate & Cookies": "₹299",
    "Double Raspberry": "₹349",
    "Vegan Classic": "₹199",
    "Gold Caramel Billionaire": "₹429"
  };

  flavorMenu.forEach(item => {
    item.addEventListener('click', () => {
      const name = item.getAttribute('data-name');
      const img = item.getAttribute('data-img');
      const price = prices[name] || "₹149";

      display.innerHTML = `
        <div class="icecream-card fly-in">
          <div class="img-wrapper">
            <img src="${img}" alt="${name}">
            <div class="overlay">
              <p class="price">${price}</p>
              <button class="order-btn">Order Now</button>
            </div>
          </div>
          <h2>${name}</h2>
          <p>You're craving for: <strong>${name}</strong> 🍨</p>
        </div>
      `;
    });
  });

  // Floating emoji background
  const floatingContainer = document.getElementById('floatingIcecreams');
  const floatImgs = ["🍫", "🍦", "🍪", "🍧", "🍨", "🥜", "🍓", "🍒", "🥥", "🍯"];

  for (let i = 0; i < 20; i++) {
    const span = document.createElement('span');
    span.className = 'float-item';
    span.textContent = floatImgs[Math.floor(Math.random() * floatImgs.length)];
    span.style.left = `${Math.random() * 100}%`;
    span.style.animationDuration = `${5 + Math.random() * 10}s`;
    floatingContainer.appendChild(span);
  }

  // Draggable menu
  const menuWrapper = document.getElementById('menuWrapper');
  let isDragging = false, offsetX = 0, offsetY = 0;

  menuWrapper.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - menuWrapper.offsetLeft;
    offsetY = e.clientY - menuWrapper.offsetTop;
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      menuWrapper.style.left = `${e.clientX - offsetX}px`;
      menuWrapper.style.top = `${e.clientY - offsetY}px`;
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Menu toggle button
  document.getElementById("menuToggle").addEventListener("click", () => {
    menuWrapper.style.display = (menuWrapper.style.display === "none") ? "block" : "none";
  });
});

function showOrderPopup() {
  const popup = document.createElement('div');
  popup.className = 'popup-box';
  popup.innerHTML = `
    <div class="popup-content">
      <span class="close-popup">&times;</span>
      <h3>✅ Your order is booked!</h3>
      <p>Just crave until it's on your doorstep! 🍨</p>
    </div>
  `;
  document.body.appendChild(popup);

  // Close on click (X)
  popup.querySelector('.close-popup').addEventListener('click', () => {
    popup.remove();
  });

  // Auto-close after 3 seconds
  setTimeout(() => popup.remove(), 3000);
}

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('order-btn')) {
    showOrderPopup();
  }
});

