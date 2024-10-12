const toggleSwitch = document.getElementById('theme-toggle');
const body = document.body;

const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
  document.documentElement.classList.add('dark-theme');
  toggleSwitch.checked = true;
} else {
  document.documentElement.classList.add('light-theme');
}

toggleSwitch.addEventListener('change', function() {
  if (toggleSwitch.checked) {
    document.documentElement.classList.remove('light-theme');
    document.documentElement.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark-theme');
    document.documentElement.classList.add('light-theme');
    localStorage.setItem('theme', 'light');
  }
});