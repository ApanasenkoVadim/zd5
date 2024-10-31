document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = 1;
        }, index * 300);
    });
});

document.addEventListener('keypress', (event) => {
    if (event.key.toLowerCase() === 'i') {
        document.body.style.backgroundColor = '#add8e6';
    }
});

document.addEventListener('keypress', (event) => {
    if (event.key.toLowerCase() === 's') {
        const surrealismImage = document.getElementById('surrealism-image');
        if (surrealismImage) {
            surrealismImage.style.position = 'relative';
            surrealismImage.style.transition = 'transform 0.3s ease';
            surrealismImage.style.transform = 'translate(20px, 20px)';
        }
    }
});
