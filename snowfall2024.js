document.addEventListener("DOMContentLoaded", function() {
  const snowflakesContainer = document.createElement('div');
  snowflakesContainer.classList.add('snowfall');
  document.body.appendChild(snowflakesContainer);

  const isMobile = window.innerWidth <= 768;
  const snowflakeInterval = isMobile ? 500 : 100; // Уменьшаем частоту появления снежинок на мобильных
  const maxSnowflakes = isMobile ? 30 : 100; // Ограничиваем максимальное количество снежинок на экране

  let currentSnowflakes = 0; // Счётчик снежинок на экране

  function createSnowflake() {
      if (currentSnowflakes >= maxSnowflakes) return; // Прекратить создавать снежинки, если достигнут лимит

      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Случайная продолжительность анимации
      snowflake.style.animationDelay = `${Math.random() * 5}s`; // Случайная задержка

      snowflakesContainer.appendChild(snowflake);
      currentSnowflakes++;

      // Удаляем снежинку после анимации
      snowflake.addEventListener('animationend', function() {
          snowflake.remove();
          currentSnowflakes--; // Уменьшаем количество снежинок в DOM
      });
  }

  // Генерируем снежинки с интервалом
  setInterval(createSnowflake, snowflakeInterval);
});