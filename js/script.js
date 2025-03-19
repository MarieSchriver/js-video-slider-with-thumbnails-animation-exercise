"use strict";

let video = document.querySelector('video');

//henter alle thumbnails som er planlagt i en unordered liste (ul li)
let thumbs = document.querySelectorAll('ul li');

//gennemløber alle thumbnails og tilføjer en eventlistener til hver enkelt
//når der klikkes på en thumbnail, så ændres videoens src til den video der er valgt
thumbs.forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
        //opdaterer videoens src til den video der er valgt
        //baseret på thumbnailens index
        video.src = `video/video${i+1}.mp4`;
        console.log(video.src);
    });
})

