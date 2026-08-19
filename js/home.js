document.documentElement.classList.add('js');

const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.header-nav');

if (header && menuToggle && navigation) {
    const closeMenu = () => {
        header.classList.remove('menu-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menu de navegação');
    };

    menuToggle.addEventListener('click', () => {
        const menuIsOpen = menuToggle.getAttribute('aria-expanded') === 'true';

        header.classList.toggle('menu-open', !menuIsOpen);
        menuToggle.setAttribute('aria-expanded', String(!menuIsOpen));
        menuToggle.setAttribute('aria-label', menuIsOpen ? 'Abrir menu de navegação' : 'Fechar menu de navegação');
    });

    navigation.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });
}

const revealElements = document.querySelectorAll('.reveal');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reducedMotion || !('IntersectionObserver' in window)) {
    revealElements.forEach((element) => element.classList.add('is-visible'));
} else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.14,
        rootMargin: '0px 0px -40px 0px',
    });

    revealElements.forEach((element) => revealObserver.observe(element));
}
