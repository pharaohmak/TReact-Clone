// script.js

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-in");
        observer.unobserve(entry.target); // Optional: Stop observing once animation is applied
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });
});

// Add an event listener to the hamburger menu button

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close-btn');
    const searchInput = document.getElementById('search__input');
    const body = document.body;


    hamburger.addEventListener('click', () => {
        overlay.classList.add('active');
        searchInput.style.display="none"
        overlay.style.scrollBehavior="none"
        body.classList.add('no-scroll');


    });

    closeBtn.addEventListener('click', () => {
        overlay.classList.remove('active');
        body.classList.remove('no-scroll');

    });

    // Close the overlay when clicking outside of the menu links
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
            body.classList.remove('no-scroll');

        }
    });
});
