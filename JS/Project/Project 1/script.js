function updateClock() {
  const now = new Date();
  const hr = now.getHours() % 12;
  const min = now.getMinutes();
  const sec = now.getSeconds();

  const hourHand = document.getElementById('hour');
  const minuteHand = document.getElementById('minute');
  const secondHand = document.getElementById('second');

  hourHand.style.transform = `rotate(${(hr * 30) + (min / 2)}deg)`;
  minuteHand.style.transform = `rotate(${min * 6}deg)`;
  secondHand.style.transform = `rotate(${sec * 6}deg)`;
}

setInterval(updateClock, 1000);
updateClock();

function toggleMode() {
  document.body.classList.toggle('dark');
  const modeBtn = document.querySelector('.mode-switch');
  if (document.body.classList.contains('dark')) {
    modeBtn.textContent = 'Switch to Light Mode';
  } else {
    modeBtn.textContent = 'Switch to Dark Mode';
  }
}

// Set correct initial button text
document.addEventListener('DOMContentLoaded', () => {
  const modeBtn = document.querySelector('.mode-switch');
  if (document.body.classList.contains('dark')) {
    modeBtn.textContent = 'Light Mode';
  } else {
    modeBtn.textContent = 'Dark Mode';
  }
});
