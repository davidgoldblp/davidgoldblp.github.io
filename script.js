const buttons = document.querySelectorAll('button');
const storyText = document.getElementById('story');
const body = document.getElementById('body');



buttons.forEach(button => {
  button.addEventListener('click', () => {


    if (button.id === 'button1') {
      storyText.textContent = "You wander deeper into the forest. The air grows colder, and the greyness thickens. Suddenly, a giant blue butterfly lands on your shoulder. Team Blue.";
    } else if(button.id ==="button2") {
      storyText.textContent = "You follow the faint blue light, which leads you to a shimmering blue lake. A lone blue flower grows on the bank. Team Blue.";
    }
    body.style.backgroundColor='blue';
    body.style.color='white';

    buttons[0].style.display='none';
    buttons[1].style.display='none';
  });
});