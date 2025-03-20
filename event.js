document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.demo-card');

    const options = {
        root: null, 
        rootMargin: '0px', 
        threshold: 0.5, 
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    cards.forEach(card => {
        observer.observe(card);
    });
});

const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.getAttribute('data-delay') || 0; 
            setTimeout(() => {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }, delay * 1000); 
        }
    });
};