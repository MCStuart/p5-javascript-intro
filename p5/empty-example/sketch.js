function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('./assets/marimba.mp3');
}

function setup() {
  mySound.setVolume(0.5);
  mySound.play();
}
