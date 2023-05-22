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
const audio = new Audio(
  "assets/music/TOIGO 토이고  BLUE CHECK Feat Jay Park 박재범 Jessi 제시 Lyrics 가사 ColorCodedLyrics SMTM11.mp3"
);

var isPlay = false;

const button = (document.querySelector(".hihi").onclick = function () {
  if (!isPlay) {
    audio.play();
    isPlay = true;
  } else {
    audio.pause();
    isPlay = false;
  }
});
