const colors = ["#FF4136", "#0074D9"];
const sections = ["Red", "Blue"];

const canvas = document.getElementById("spinner-canvas");
const ctx = canvas.getContext("2d");
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = canvas.width / 2 - 10;

// Draw the sections of the spinner
let startAngle = 0;
let arc = Math.PI / (sections.length / 2);
for (let i = 0; i < sections.length; i++) {
  let angle = startAngle + i * arc;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, angle, angle + arc, false);
  ctx.lineWidth = 40;
  ctx.strokeStyle = colors[i % colors.length];
  ctx.stroke();

  // Add section label
  ctx.save();
  ctx.translate(centerX, centerY);
  ctx.rotate(angle + arc / 2);
  ctx.font = "bold 24px Arial";
  ctx.fillStyle = "#fff";
  ctx.fillText(sections[i], radius / 2, 0);
  ctx.restore();
}

// Spin the spinner
const spinButton = document.getElementById("spin-button");
spinButton.addEventListener("click", () => {
  // Calculate a random angle to spin to
  const randomAngle = Math.floor(Math.random()*180) + 270 + 720 + 720;

  // Animate the spinner to the random angle
  const spinAnimation = canvas.animate(
    [
      { transform: "rotate(0deg)" },
      { transform: `rotate(${randomAngle}deg)` }
    ],
    {
      duration: 3000,
      easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      iterations: 1
    }
  );

  // When the animation is done, display the winning section
  spinAnimation.onfinish = () => {
    const winningSection = Math.floor((randomAngle % 360) / arc);
    alert(`you are on team blue!`);
  };
});
