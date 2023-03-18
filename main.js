const elements1 = document.querySelectorAll('.animate-on-scroll');
const elements2 = document.querySelectorAll('.animate-on-scrollX');
const elements3 = document.querySelectorAll('.animate-on-scroll-X');
const elements4 = document.querySelectorAll('.animate-on-scroll-Y');
const elements = [...elements1,...elements2,...elements3,...elements4]
function animateOnScroll() {
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const elementPosition = element.getBoundingClientRect();

        if (elementPosition.top <= window.innerHeight && elementPosition.bottom >= 0) {
            element.classList.add('animated');
        } else {
            element.classList.remove('animated');
        }
    }
}

animateOnScroll();

window.addEventListener('scroll', animateOnScroll);