const toggleSwitch = document.getElementById('theme-toggle');

function setTheme(theme) {
  console.log(`Устанавливаем тему: ${theme}`);
  if (theme === 'dark') {
    document.documentElement.classList.add('dark-theme');
    document.documentElement.classList.remove('light-theme');
    toggleSwitch.checked = true;
  } else {
    document.documentElement.classList.add('light-theme');
    document.documentElement.classList.remove('dark-theme');
    toggleSwitch.checked = false;
  }
}

if (typeof(Storage) !== "undefined") {
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  console.log(`Сохранённая тема: ${savedTheme}`);
  console.log(`Системная тема тёмная: ${systemPrefersDark}`);
  
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    setTheme(systemPrefersDark ? 'dark' : 'light');
  }
  
  toggleSwitch.addEventListener('change', function() {
    if (toggleSwitch.checked) {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  });
  
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    console.log(`Системная тема изменилась на: ${e.matches ? 'dark' : 'light'}`);
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
  
} else {
  console.warn("localStorage не поддерживается в этом браузере.");
}