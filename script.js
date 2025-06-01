const profilePic = document.querySelector('.profile-pic');
const funnySound = document.getElementById('funnySound');

profilePic.addEventListener('click', () => {
  funnySound.play();
});

const sendBtn = document.getElementById('sendBtn');
sendBtn.addEventListener('click', function (e) {
  e.preventDefault();
  alert("Done✉️");
});
