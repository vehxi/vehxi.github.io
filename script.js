// Ждем, пока весь HTML-документ будет полностью загружен
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Анимация появления элементов ---
    // Находим все элементы, которые нужно анимировать...
    const animatedElements = document.querySelectorAll('.fade-in-up');
    // ... и добавляем им класс 'visible', чтобы запустить CSS-анимацию.
    animatedElements.forEach(el => {
        el.classList.add('visible');
    });

    // --- 2. Активация иконок Feather Icons ---
    // Оборачиваем в try...catch на случай, если скрипт иконок не загрузится.
    // Это предотвратит падение всего нашего скрипта.
    try {
        feather.replace();
    } catch (e) {
        console.error('Feather Icons script not loaded', e);
    }

    // --- 3. Фикс для автопроигрывания видео в Safari ---
    // Находим наш видео-элемент.
    const video = document.querySelector('.rounded-video');
    
    // Проверяем, что видео вообще есть на странице.
    if (video) {
        // Вызываем метод .play(). В современных браузерах он возвращает Promise.
        const promise = video.play();

        // Проверяем, что Promise был возвращен.
        if (promise !== undefined) {
            promise.catch(error => {
                // Если Safari или другой браузер блокирует автоплей, Promise будет отклонен.
                // Мы "ловим" эту ошибку, чтобы она не появилась в консоли как красная.
                console.warn("Autoplay was prevented by the browser.", error);
                // В нашем дизайне мы просто принимаем, что видео не запустится,
                // и оно останется статичным постером. Ничего страшного.
            });
        }
    }
    
});