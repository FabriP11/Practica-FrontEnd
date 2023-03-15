const music = document.getElementById('music');
const playPause = document.querySelector('.play-pause');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress-bar');

playPause.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    playPause.classList.add('playing');
  } else {
    music.pause();
    playPause.classList.remove('playing');
  }
});

music.addEventListener('timeupdate', () => {
  const currentTime = music.currentTime;
  const duration = music.duration;
  const progressWidth = (currentTime / duration) * 100;
  progress.style.width = `${progressWidth}%`;
});

progressBar.addEventListener('click', (event) => {
  const barWidth = progressBar.offsetWidth;
  const clickedX = event.offsetX;
  const duration = music.duration;
  const newCurrentTime = (clickedX / barWidth) * duration;
  music.currentTime = newCurrentTime;
});
