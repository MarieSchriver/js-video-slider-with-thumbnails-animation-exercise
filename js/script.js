"use strict";

let video = document.querySelector('video');

//henter alle thumbnails som er planlagt i en unordered liste (ul li)
let thumbs = document.querySelectorAll('ul li');

thumbs.forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
        video.src = `video/video${i+1}.mp4`;
    });
})

