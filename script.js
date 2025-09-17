document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach(el => {
        el.classList.add('visible');
    });

    try {
        feather.replace();
    } catch (e) {
        console.error('Feather Icons script not loaded', e);
    }


    const video = document.querySelector('.rounded-video');
    
    if (video) {
        const promise = video.play();

        if (promise !== undefined) {
            promise.catch(error => {
                console.warn("Autoplay was prevented by the browser.", error);
            });
        }
    }
    
});