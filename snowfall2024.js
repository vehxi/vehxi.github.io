document.addEventListener("DOMContentLoaded", function() {
  const snowflakesContainer = document.createElement('div');
  snowflakesContainer.classList.add('snowfall');
  document.body.appendChild(snowflakesContainer);

  function createSnowflake() {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Случайная продолжительность от 5 до 10 секунд
      snowflake.style.animationDelay = `${Math.random() * 5}s`; // Случайная задержка
      snowflakesContainer.appendChild(snowflake);

      // Удаляем снежинку после окончания анимации, чтобы избежать лишних элементов в DOM
      snowflake.addEventListener('animationend', function() {
          snowflake.remove();
      });
  }

  // Определяем мобильное устройство
  const isMobile = window.innerWidth <= 768;

  // Изменяем частоту создания снежинок для мобильных устройств
  const snowflakeInterval = isMobile ? 800 : 100; // На мобильных устройствах создаем снежинки реже

  // Генерация снежинок через заданный интервал
  setInterval(createSnowflake, snowflakeInterval);
});