// The DOMContentLoaded event fires when the initial HTML docment has been completely loaded and paused, without waiting for stylesheets, images, subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheet and images.

const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

btn.addEventListener('click', () => {
    if(!btn.classList.contains('slide')) {
        btn.classList.add('slide');
        video.pause();
    }
    else {
        btn.classList.remove('slide');
        video.play();
    }
})

// preloader
const preloader = document.querySelector('.preloader');

window.addEventListener('load', () => {
    preloader.classList.add('hide-preloader');
})