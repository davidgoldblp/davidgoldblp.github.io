const ball = document.querySelector('.ball');
const launchButton = document.querySelector('.launch-button');

launchButton.addEventListener('click', () => {
  // Randomize the ball's trajectory
  let angle = Math.random() * 2 * Math.PI;
  let speed = 5; // Adjust the speed as needed

  // Simulate the ball's movement using setInterval
  let x = ball.offsetLeft;
  let y = ball.offsetTop;
  const intervalId = setInterval(() => {
    x += speed * Math.cos(angle);
    y -= speed * Math.sin(angle);
    ball.style.left = x + 'px';
    ball.style.top = y + 'px';

    // Check if the ball has hit a target
    const redTargetRect = document.querySelector('.red-target').getBoundingClientRect();
    const blueTargetRect = document.querySelector('.blue-target').getBoundingClientRect();
    if (x > redTargetRect.left && x < redTargetRect.right && y > redTargetRect.top && y < redTargetRect.bottom) {
      clearInterval(intervalId);
	  let elem = document.getElementById("red");
	  elem.classList.toggle('red-target');
	  //elem.classList.add('target');
      elem.style.backgroundColor = 'blue';
	  alert('Blue Team!');
	  

	  
	  
    } else if (x > blueTargetRect.left && x < blueTargetRect.right && y > blueTargetRect.top && y < blueTargetRect.bottom) {
      clearInterval(intervalId);
      alert('Blue Team!');
    }
	if(x < 0 || x > 380 || y < 0 || y > 380)
	{
		speed = speed * -1
		angle = angle + Math.random() * 10
	}
	
  }, 10);
});