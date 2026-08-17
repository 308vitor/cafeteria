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
