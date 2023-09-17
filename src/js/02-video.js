import Player from '@vimeo/player';
import throttle from 'lodash.throttle';



const video = document.querySelector('iframe');

const TIME_KEY = "videoplayer-current-time";
console.log(video);

const player = new Player(video);

player.on('timeupdate', throttle(onPlayVideo, 1000));

const saveTime = JSON.parse(localStorage.getItem(TIME_KEY)) || 0;
player.setCurrentTime(saveTime);

function onPlayVideo(data) {
    const videoLocStore = data.seconds;
    localStorage.setItem(TIME_KEY, JSON.stringify(videoLocStore));
}
