
    document.addEventListener("DOMContentLoaded", () => {
        const hamburger = document.getElementById('hamburger');
        const navRight = document.querySelector('.nav-right');

        hamburger.addEventListener('click', () => {
            navRight.classList.toggle('active');
        });

        hamburger.addEventListener('click', () => {
            if (navRight.style.height && navRight.style.height !== '0px') {
                navRight.style.height = '0px';
            } else {
                navRight.style.height = navRight.scrollHeight + 'px';
            }
        });
    });

        // Remove "hamburger mode" when hitting resize button, otherwise causes bug
        window.addEventListener('resize', () => {
        const navRight = document.querySelector('.nav-right');
        if (window.innerWidth > 1300) {
            navRight.classList.remove('active');
            navRight.style.height = '';
        }
    });