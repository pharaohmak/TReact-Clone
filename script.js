// script.js

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in');
                observer.unobserve(entry.target); // Optional: Stop observing once animation is applied
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
