const button = document.getElementById('pick-button');
const result = document.getElementById('result');

button.addEventListener('click', () => {
  const colors = ['blue', 'blue'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  const chosenColor = colors[randomIndex];

  result.textContent = `You picked ${chosenColor}`;
  result.style.color = chosenColor;
  playSound('https://ia903104.us.archive.org/34/items/Coldplay_201807/Yellow.mp3');
  var body = document.getElementsByTagName('body');
  document.body.classList.add('it-was-all-yellow');

  setTimeout(function () {
		const container = document.getElementById('container');
		container.style.display = 'none';
		const myImage = new Image(480, 208);
		myImage.src = "https://pa1.aminoapps.com/7805/11426e762c47482c08c924edd389503c0e520607r1-480-208_hq.gif";
		document.body.appendChild(myImage);
    }, 8400);
});

function playSound(url) {
    var a = new Audio(url);
    a.play();
}


