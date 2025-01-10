const Hobbies_display = {
  book: [
    "Videos/Books.mp4",
    `Books are a gateway to endless worlds, where every page holds a new
        adventure. Through stories, we find connection, inspiration, and the
        freedom to dream.`,
    "image/book.jpg",
    "image/book2.jpg",
  ],
  Adventures: [
    "Videos/adventure.mp4",
    `Adventures take us to new worlds, where every
       step brings excitement. They inspire us, connect us, 
       and remind us to dream big and explore the unknown.`,
    "image/adventure1.jpg",
    "image/adventure2.jpg",
  ],
  volunteering: [
    "Videos/voluntering.mp4",
    `Volunteering is a way to bring people
       together and make a difference.It’s about giving your time and care to
        help others and create positive change. With each small act of kindness, 
      we find purpose and bring hope to the world around us. Lets be human and help one another`,
    "image/volunter.jpg",
    "image/volunter2.jpg",
  ],
  Music: [
    "Videos/music.mp4",
    `Music is a universal language that connects us all. It’s a way to 
      express feelings, tell stories, and bring people together. Through
       every melody and rhythm, music inspires, heals, and fills our 
       lives with joy and meaning.`,
    "image/music1.jpg",
    "image/music2.jpg",
  ],
};

const testers = [
   [
    "image/Test.jpg",
    "Suraphel Nega",
    `Working with Hilina is a blast! She combines creativity and tech 
    skills to make tough problems look easy, all while keeping the team 
    motivated and hitting deadlines with the brightest smile. `,
  ],
   [
    "image/Test2.jpg",
    "Ruth Yeshitla",
    `Hilina is always a great partner because she never stops trying to 
    improve and make her work better. She is a visionary, and that’s what 
    makes her special`,
  ],
];

// hobbies btn
const Hobby_btn = document.querySelectorAll(".Hobbies_bt");
const Video = document.getElementById("video_source");
const myVideo = document.getElementById("Videos");
const Hobby_text = document.getElementById("Hobby_info");
const hobbyImg1 = document.getElementById("Hobbie_img1");
const hobbyImg2 = document.getElementById("Hobbie_img2");

Hobby_btn.forEach(function (button) {
  const value = button.dataset.value;
  button.addEventListener("click", function (btn) {
    const hobbyData = Hobbies_display[value];
    Video.src = hobbyData[0];
    myVideo.load();
    Hobby_text.textContent = hobbyData[1];
    hobbyImg1.src = hobbyData[2];
    hobbyImg2.src = hobbyData[3];
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const Cv_btn = document.getElementById("Cv_btn");
  if (Cv_btn) {
    Cv_btn.addEventListener("click", function () {
      window.open("file/CV.pdf", "_blank");
    });
  } else {
    console.log("button not found");
  }
});

// Audio
const audio = document.querySelector(".About_audio");
const Audio_btn = document.getElementById("play_btn");
if (Audio_btn) {
  Audio_btn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      Audio_btn.textContent = "Pause Audio";
    } else {
      audio.pause();
      Audio_btn.textContent = "Play Audio";
    }
  });
}

// certificate slide
let currentImageLocation = 0;
const certificates = document.querySelector(".certificates");
const totalCertificates = document.querySelectorAll(".certificate_img").length;

function slider() {
  currentImageLocation = (currentImageLocation + 1) % totalCertificates;
  certificates.style.transform = `translateX(-${currentImageLocation * 220}px)`;
  certificates.style.transition = "transform 0.90s ease";
}

setInterval(slider, 2000);

// toggler

const togglebtn = document.querySelectorAll(".toggler-btn");
const sidebar = document.querySelector(".sidebar");

if (togglebtn.length > 0 && sidebar) {
  togglebtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
      sidebar.classList.toggle("hide");
    });
  });
}

// testimony
let index=0
const btns = document.querySelectorAll(".test_btn");
const testImg = document.getElementById("test_img");
const testName = document.querySelector(".test_name");
const testPara = document.getElementById("test_para");
btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    
    if (index<testers.length-1){
      index=index+1
    
    }
    else{
      index=index-1
      
    }
      testImg.src = testers[index][0];
      testName.textContent = testers[index][1];
      testPara.textContent = testers[index][2];
  });
});
