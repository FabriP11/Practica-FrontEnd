const button = document.getElementById('change-color');
const text = document.querySelector('p');

button.addEventListener('click', () => {
  const colors = ['red', 'blue', 'green', 'yellow'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  text.style.color = randomColor;
});
