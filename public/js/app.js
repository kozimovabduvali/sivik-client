const hamburgerOpenBtn = document.querySelectorAll(".hamburgerOpenBtn");
const hamburgerMenuHeader = document.querySelector(".hamburgerMenuHeader");
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const hamburgerOverlay = document.querySelector(".hamburgerOverlay");
const hamburgerMenuClose = document.querySelector(".hamburgerMenuClose");

const HamburgerToggle = () => {
  hamburgerMenuHeader.classList.toggle("-top-full");
  hamburgerMenuHeader.classList.toggle("top-0");
  hamburgerMenu.classList.toggle("-left-full");
  hamburgerMenu.classList.toggle("left-0");
  hamburgerOverlay.classList.toggle("hidden");
  hamburgerOverlay.classList.toggle("flex");
};

hamburgerOpenBtn.forEach((item) => {
  item.addEventListener("click", function () {
    HamburgerToggle();
  });
});

hamburgerOverlay.addEventListener("click", function () {
  HamburgerToggle();
});

hamburgerMenuClose.addEventListener("click", function () {
  HamburgerToggle();
});


   document.querySelectorAll('.dropdown-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const dropdown = button.nextElementSibling;
      const isOpen = dropdown.style.height && dropdown.style.height !== '0px';

      if (isOpen) {
        // Yopish
        dropdown.style.height = dropdown.scrollHeight + 'px';
        requestAnimationFrame(() => {
          dropdown.style.height = '0px';
        });
      } else {
        // Ochish
        dropdown.style.height = dropdown.scrollHeight + 'px';
        dropdown.addEventListener('transitionend', function handler() {
          dropdown.style.height = 'auto';
          dropdown.removeEventListener('transitionend', handler);
        });
      }
    });
  });