var menuBtn = document.querySelector(".menu-icon");
var menubarBtn = document.querySelector(".menu-bar");
var arrowbarBtn = document.querySelector(".arrow-icon");

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
// var audio = new Audio(
//   "assets/music/TOIGO 토이고  BLUE CHECK Feat Jay Park 박재범 Jessi 제시 Lyrics 가사 ColorCodedLyrics SMTM11.mp3"
// );

// var play = document.querySelector(".music-play");
// var pause = document.querySelector(".music-pause");
// var isPlay = false;
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
var menubar = document.querySelector(".menu-bar");

moon.onclick = function () {
  moon.style.display = "none";
  sun.style.display = "block";
  mode.classList.add("dark");
  mode.classList.remove("light");
  menubar.style.backgroundColor = "black";
};

sun.onclick = function () {
  sun.style.display = "none";
  moon.style.display = "block";
  mode.classList.add("light");
  mode.classList.remove("dark");
  menubar.style.backgroundColor = "white";
};

var menulistBtn = document.querySelectorAll(".menu-bar li");

menulistBtn.forEach(function (listbtn) {
  listbtn.onclick = function () {
    menubarBtn.style.display = "none";
    menuBtn.style.display = "block";
    arrowbarBtn.style.display = "none";
    console.log("vinh");
  };
});

var languages = [
  {
    id: 1,
    lang: "vn",
    content: {
      selects: {
        home: "Trang chủ",
        about: "Về tôi",
        skill: "Kỹ năng",
        projects: "Dự án",
        contact: "Liên hệ",
      },
      info: [
        "Xin chào",
        "Tôi là",
        "Bạn muốn tôi làm việc cho bạn, đừng ngần ngại hãy liên hệ ngay với tôi!",
        "Tải CV",
        "Thuê tôi",
      ],
      about: [
        "Về tôi",
        "Là một chuyên viên phát triển website đến từ Thành phố Hồ Chí Minh, Việt Nam",
        "Là một Front-End Development, Tôi thành thạo những kĩ năng ấn tượng như: HTML, CSS, javaScript, React, TailwindCSS và SCSS. Tôi xuất sắc trong việc thiets kế và duy trì các trang web đáp ứng mang lại trải nghiệm mượt mà cho người dùng. Chuyên môn của tôi là tạo ra các giao diện năng động, hấp dẫn thông qua việc code rõ ràng và tối ưu hóa, đồng thời sử dụng các công cụ và kỹ thuật phát triển tiên tiến. Tôi cũng là một người tích cực trong việc tham gia một team IT để cùng làm ra nhiều dự án mới mẻ và hấp dẫn.",
      ],
      skill: ["Kỹ năng"],
    },
  },
  {
    id: 2,
    lang: "en",
    content: {
      selects: {
        home: "Home",
        about: "About",
        skill: "Skill",
        projects: "Projects",
        contact: "Contact",
      },
      info: [
        "Hello",
        "I'm",
        "You want me to work for you, do not hesitate to contact me immediately!",
        "Download CV",
        "Hire me",
      ],
      about: [
        "About me",
        "A dedicated Front-end Developer based in Hồ Chí Minh City, Việt Nam,",
        "As a Front-End Developer. I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques, I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.",
      ],
      skill: ["Skill"],
    },
  },
];

var currentLanguage = 1;
var enBtn = document.querySelector(".language-EN");
var viBtn = document.querySelector(".language-VI");

enBtn.onclick = function () {
  enBtn.style.display = "none";
  viBtn.style.display = "block";
  changeLanguage(0);
};

viBtn.onclick = function () {
  viBtn.style.display = "none";
  enBtn.style.display = "block";
  currentLanguage = 0;
  changeLanguage(1);
};

var changeLanguage = function (currentLanguage) {
  var selectSpa = document.querySelector(".select");
  var itemSelect = [];
  for (var key in languages[currentLanguage].content.selects) {
    itemSelect.push(
      `<li><a href="#${key}">${languages[currentLanguage].content.selects[key]}</a></li>`
    );
  }
  selectSpa.innerHTML = itemSelect.join("");

  document.querySelector(".menu-bar").innerHTML = itemSelect.join("");

  var infoItem = languages[currentLanguage].content.info;
  var infoSpa = (document.querySelector(
    ".container"
  ).innerHTML = `<div class="welcome">${infoItem[0]}</div>
<h1 class="intro">${infoItem[1]} <span class="change">Coder</span></h1>
<p class="letter">
${infoItem[2]}
</p><div class="actions">
<a
  href="https://drive.google.com/file/d/1fJCrGWLpSnTvbRmWSi3cSTMyNlsV--cv/view?usp=share_link"
  class="btn"
  >${infoItem[3]}</a
>
<a href="tel:0395875913" class="btn">${infoItem[4]}</a>`);

  var infoItem = languages[currentLanguage].content.about;
  var aboutSpa = (document.querySelector(
    ".about__info"
  ).innerHTML = `<div class="about__title">${infoItem[0]}</div>
<h3 class="about__preface">
${infoItem[1]}
</h3>
<p class="about__letter">
${infoItem[2]}
</p>`);

  var skillItem = languages[currentLanguage].content.skill;
  var skilSpa = (document.querySelector(".skill-title").textContent =
    skillItem[0]);
};

changeLanguage(currentLanguage);

var typed = new Typed(".change", {
  strings: ["Coder", "Designer", "Youtuber", "Tiktoker"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1500,
});
