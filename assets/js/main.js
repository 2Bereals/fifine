document.addEventListener('DOMContentLoaded', () => {
    const triggerItem = document.querySelector('.show-menu-products');
    const menuCatalog = document.querySelector('.menu-catalog');
    const menuItems = document.querySelectorAll('.header-menu li a');
    const overlay = document.querySelector('.menu-catalog .overlay');

    let showTimeout;

    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            if (item === triggerItem) {
                showTimeout = setTimeout(() => {
                    menuCatalog.style.display = 'block';
                    triggerItem.classList.add('active')
                }, 400);
            } else {
                clearTimeout(showTimeout);
                menuCatalog.style.display = 'none';
                triggerItem.classList.remove('active');
            }
        });

        item.addEventListener('mouseleave', () => {
            clearTimeout(showTimeout);
        });
    });

    menuCatalog.addEventListener('mouseleave', () => {
        menuCatalog.style.display = 'none';
        triggerItem.classList.remove('active');
    });

    overlay.addEventListener('click', () => {
        menuCatalog.style.display = 'none';
        triggerItem.classList.remove('active');
    });


    
    const video = document.querySelector('.video-bg');
    const sourceMp4 = video.querySelector('source[type="video/mp4"]');
    const sourceWebm = video.querySelector('source[type="video/webm"]');

    let currentFormat = null;

    function updateVideoSource() {
        const screenWidth = window.innerWidth;

        if (screenWidth > 1400 && currentFormat !== 'mp4') {
            sourceMp4.setAttribute('src', 'assets/src/bg.mp4');
            sourceWebm.removeAttribute('src');
            currentFormat = 'mp4';
            video.load();
        } else if (screenWidth <= 1400 && currentFormat !== 'webm') {
            sourceWebm.setAttribute('src', 'assets/src/bg-m.webm');
            sourceMp4.removeAttribute('src');
            currentFormat = 'webm';
            video.load();
        }
    }

    updateVideoSource();

    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            updateVideoSource();
        }, 200);
    });


});
