const sections = document.querySelectorAll('.fade-section');

const revealOnScroll = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 100;

        if (sectionTop < triggerPoint) {
            section.classList.add('show');
        }
        const text = document.querySelector('.typed-text').textContent;
const textArray = text.split('');
document.querySelector('.typed-text').textContent = '';

textArray.forEach((char, index) => {
    setTimeout(() => {
        document.querySelector('.typed-text').textContent += char;
    }, 100 * index); // 100ms per letter
});

    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // run once on load

