
var manifestUri =
    'sample_all.mpd';

function initApp() {
  shaka.polyfill.installAll();

  if (shaka.Player.isBrowserSupported()) {
    initPlayer();
  } else {
    console.error('Browser not supported!');
  }
}

function initPlayer() {
  var video = document.getElementById('video');
  var player = new shaka.Player(video);

  window.player = player;

  player.addEventListener('error', onErrorEvent);

  player.load(manifestUri).then(function() {
    console.log('The video has now been loaded!');
  }).catch(onError);
}

function onErrorEvent(event) {
  onError(event.detail);
}

function onError(error) {
  console.error('Error code', error.code, 'object', error);
}

document.addEventListener('DOMContentLoaded', initApp);
