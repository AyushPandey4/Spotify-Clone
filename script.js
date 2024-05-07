console.log("welcome to spotify");

//selecting the elements 

const headercover = document.getElementById("headercover");
const headermusicname = document.getElementById("headercoverdetailsnamespan");
const headermusicduration = document.getElementById("headercoverdetailsdurationspan");
const songitemplaybtn = document.getElementById("0");
const footercover = document.getElementById("footercover");
const footermusicname = document.getElementById("footermusicname");
const previousbtn = document.getElementById("previous");
const masterplaybtn = document.getElementById("masterPlay");
const nextbtn = document.getElementById("next");
const progressbar = document.getElementById("progressbar");
const progressbarduration = document.getElementById("progressbarduration");
const songitemduration = document.querySelectorAll('.songitemduration');
const headercoverdetailsdurationspan = document.getElementById("headercoverdetailsdurationspan");

let songindex = 0;

let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg", duration: "5:30"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg", duration: "2:30"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg", duration: "1:30"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg", duration: "2:00"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg", duration: "3:00"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg", duration: "4:20"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg", duration: "9:45"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg", duration: "0:40"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg", duration: "1:21"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg", duration: "3:41"},

]

let songitems = document.querySelectorAll('.songitem');
let songname = document.querySelectorAll('.songname');
let audioElement = new Audio('songs/1.mp3');

//naming song name in songitems divs dynamically
for(let i = 0; i < songname.length; i++){
    songname[i].innerText = songs[i].songName;
    songitemduration[i].innerText = songs[i].duration;
    // songitemduration[i].innerText = audioElement[i].duration;
    // let songcover = document.getElementsByTagName("img");
    // songcover[i].src = songs[i].coverPath;
}
//handleing play/pause click
masterplaybtn.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterplaybtn.classList.remove('fa-play-circle');
        masterplaybtn.classList.add('fa-pause-circle');

    }
    else{
        audioElement.pause();
        masterplaybtn.classList.remove('fa-pause-circle');
        masterplaybtn.classList.add('fa-play-circle');
    }
});

//working on progress bar
audioElement.addEventListener('timeupdate', () => {
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    // console.log(progress);
    progressbar.value = progress;
})

progressbar.addEventListener('change', () => {
    audioElement.currentTime = (progressbar.value * audioElement.duration) / 100;
})

//songitemsdiv working
const songitemicon = document.querySelectorAll('.songItemPlay');

for(let j = 0; j < songitemicon.length; j++){
songitemicon[j].addEventListener('click', (e) => {
    for(let z=0;z<songitemicon.length;z++){
    songitemicon[z].classList.remove('fa-pause-circle');
    songitemicon[z].classList.add('fa-play-circle');
    }
    songindex = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = `songs/${songindex+1}.mp3`;
    footercover.src = `covers/${songindex+1}.jpg`;
    footermusicname.innerText = songs[songindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    headercover.src = `covers/${songindex+1}.jpg`;
    headermusicname.innerText = songs[songindex].songName;
    headercoverdetailsdurationspan.innerText = songs[songindex].duration;
});
}

// working on next btn
nextbtn.addEventListener('click', () =>  {
if(songindex>=9){
    songindex = 0;
}
else{
    songindex++;
   
}
for(let z=0;z<songitemicon.length;z++){
    songitemicon[z].classList.remove('fa-pause-circle');
    songitemicon[z].classList.add('fa-play-circle');
    }
    songitemicon[songindex].classList.remove('fa-play-circle');
    songitemicon[songindex].classList.add('fa-pause-circle');
    audioElement.src = `songs/${songindex+1}.mp3`;
    footercover.src = `covers/${songindex+1}.jpg`;
    footermusicname.innerText = songs[songindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    headercover.src = `covers/${songindex+1}.jpg`;
    headermusicname.innerText = songs[songindex].songName;
    headercoverdetailsdurationspan.innerText = songs[songindex].duration;
});

//working on previous btn
previousbtn.addEventListener('click', () =>  {
if(songindex<=0){
    songindex = 0;
}
else{
    songindex--;
   
}
for(let z=0;z<songitemicon.length;z++){
    songitemicon[z].classList.remove('fa-pause-circle');
    songitemicon[z].classList.add('fa-play-circle');
    }
    songitemicon[songindex].classList.remove('fa-play-circle');
    songitemicon[songindex].classList.add('fa-pause-circle');
    audioElement.src = `songs/${songindex+1}.mp3`;
    footercover.src = `covers/${songindex+1}.jpg`;
    footermusicname.innerText = songs[songindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    headercover.src = `covers/${songindex+1}.jpg`;
    headermusicname.innerText = songs[songindex+1].songName;
    headercoverdetailsdurationspan.innerText = songs[songindex].duration;
});
