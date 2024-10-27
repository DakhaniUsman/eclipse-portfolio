const observerOptions = {
    root: null,
    // rootMargin: "0px 0px -50% 0px", // Adjusts to trigger earlier (you can tweak this value)
    threshold: 0.1 // Triggers animation when 10% of the element is in view
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

// Attach observer to all elements with the 'hidden' class
document.querySelectorAll('.hidden').forEach((element) => observer.observe(element));
