const team = document.querySelector('#team');
const message = document.querySelector('#message');

const chooseButton = document.querySelector('#choose-button');

const faces = ['\u{1F499}', '\u{1F4D8}', '\u{1F535}', '\u{1F537}', '\u{1F30A}', '\u{1F534}'];

chooseButton.addEventListener('click', () => {
message.textContent = "";
  const randomFace = faces[Math.floor(Math.random() * faces.length)];
  team.style.transform = `rotateX(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg)`;
  setTimeout(() => {
    team.style.transform = 'none';
    team.textContent =  randomFace;
    if(randomFace == '\u{1F534}') {
        message.textContent = "Your team is RRRRRRRRRR";
        setTimeout(() => {
            team.textContent =  faces[1];
            message.textContent = "Your team is RRRRRRRRRROYAL BLUE";
          }, 1200);
    }
    else {
    message.textContent = "Your team is BLUE";
    }

  }, 800);
});

