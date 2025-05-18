const header = document.querySelector("header");
const menu = document.querySelector("#menu-icon");
const navlist = document.querySelector('.navlist');

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 120);
});

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

// When scrolling, remove active menu and icon classes
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};
const swiper = new Swiper(".testimonials-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 40,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});
const video = document.querySelector('.auto-play-video');

const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      video.play();
    } else {
      video.pause();
      video.currentTime = 0; // optional: reset to start
    }
  });
}, {
  threshold: 0.6 // play when 60% in view
});

if (video) {
  videoObserver.observe(video);
}

const form = document.querySelector('.contact-form form');
  const nameInput = form.querySelector('input[type="text"]');
  const mustafaAudio = document.getElementById('mustafaAudio');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent actual submission for this demo

    const nameValue = nameInput.value.trim().toLowerCase();

    if (nameValue === "Ghulam Mustafa"|| nameValue === "ghulam mustafa") {
      mustafaAudio.play().catch((err) => {
        console.log("Autoplay prevented:", err);
      });
    }

    // You can remove this or handle actual form submission
    alert("Form submitted!");
  });
const root = document.documentElement;
const toggle = document.getElementById('colorToggle');
const palette = document.getElementById('colorPalette');
const colorOptions = document.querySelectorAll('.color-option');
const resetButton = document.getElementById('resetColors');

let activeColor = '#90542f'; // Default color

// Toggle palette visibility
toggle.addEventListener('click', () => {
  palette.classList.toggle('visible');
});

// Apply selected color
colorOptions.forEach(option => {
  option.addEventListener('click', () => {
    const color = option.getAttribute('data-color');
    root.style.setProperty('--second-bg-color', color);
    root.style.setProperty('--transition-color', color);
          document.documentElement.style.setProperty('--main-color', color);
      document.documentElement.style.setProperty('--footer-color', color);
    activeColor = color;

    // Update toggle button color
    toggle.innerHTML = `<div class="color-option active" style="background: ${color}" data-color="${color}"></div>`;

    // Close palette
    palette.classList.remove('visible');
  });
});

// Reset colors
resetButton.addEventListener('click', () => {
  const defaultColor = '#ffb7c5';
  root.style.setProperty('--second-bg-color', defaultColor);
  root.style.setProperty('--transition-color', defaultColor);
          document.documentElement.style.setProperty('--main-color', '#90542f');
      document.documentElement.style.setProperty('--footer-color', '#90542f');
  activeColor = defaultColor;
  toggle.innerHTML = `<div class="color-option active" style="background: ${defaultColor}" data-color="${defaultColor}"></div>`;
  palette.classList.remove('visible');
});


const modal = document.getElementById("achievementsModal");
const closeBtn = modal.querySelector(".close-modal-btn");
const achievementsBtn = document.getElementById("achievementsBtn");

achievementsBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  // Trigger reflow to restart animation
  void modal.offsetWidth;
  modal.classList.add("animate");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("animate");
  // Wait for animation to finish before hiding
  setTimeout(() => {
    modal.classList.add("hidden");
  }, 300);
});

// Close modal when clicking outside content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("animate");
    setTimeout(() => {
      modal.classList.add("hidden");
    }, 300);
  }
});
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.querySelector('.screen-reveal').classList.add('revealed');
      document.body.classList.add('revealed');

      // Optional: remove the screen overlay after animation
      setTimeout(() => {
        document.querySelector('.screen-reveal').style.display = 'none';
      }, 1000);
    }, 10); // delay before animation starts
  });