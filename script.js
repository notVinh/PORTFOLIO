var typed = new Typed(".change", {
  strings: ["Coder", "Designer", "Youtuber", "Tiktoker"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1500,
});

const menuBtn = document.querySelector(".menu-icon");
const menubarBtn = document.querySelector(".menu-bar");
const arrowbarBtn = document.querySelector(".arrow-icon");

menuBtn.onclick = function () {
  menuBtn.style.display = "none";
  arrowbarBtn.style.display = "block";
  menubarBtn.style.display = "block";
};

arrowbarBtn.onclick = function () {
  menuBtn.style.display = "block";
  arrowbarBtn.style.display = "none";
  menubarBtn.style.display = "none";
};

// play the music
// const audio = new Audio(
//   "assets/music/TOIGO 토이고  BLUE CHECK Feat Jay Park 박재범 Jessi 제시 Lyrics 가사 ColorCodedLyrics SMTM11.mp3"
// );

// var isPlay = false;

// const play = document.querySelector(".music-play");
// const pause = document.querySelector(".music-pause");

// play.onclick = function () {
//   play.style.display = "none";
//   pause.style.display = "block";
//   if (!isPlay) {
//     audio.play();
//     isPlay = true;
//   } else {
//     audio.pause();
//     isPlay = false;
//   }
// };

// pause.onclick = function () {
//   pause.style.display = "none";
//   play.style.display = "block";
//   if (isPlay) {
//     audio.pause();
//     isPlay = false;
//   } else {
//     audio.play();
//     isPlay = true;
//   }
// };

var moon = document.querySelector(".moon");
var sun = document.querySelector(".sun");
var mode = document.querySelector(".mode");

moon.onclick = function () {
  moon.style.display = "none";
  sun.style.display = "block";
  mode.classList.add("dark");
  mode.classList.remove("light");
};

sun.onclick = function () {
  sun.style.display = "none";
  moon.style.display = "block";
  mode.classList.add("light");
  mode.classList.remove("dark");
};
