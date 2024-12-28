document.addEventListener("DOMContentLoaded", function() {
  const snowflakesContainer = document.createElement('div');
  snowflakesContainer.classList.add('snowfall');
  document.body.appendChild(snowflakesContainer);

  function createSnowflake() {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random duration between 5s and 10s
      snowflake.style.animationDelay = `${Math.random() * 5}s`; // Random delay
      snowflakesContainer.appendChild(snowflake);

      // Remove snowflake after animation to avoid excess elements in the DOM
      snowflake.addEventListener('animationend', function() {
          snowflake.remove();
      });
  }

  // Generate snowflakes continuously
  setInterval(createSnowflake, 100);
});