let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

const width = 800;
const height = 500;
const MID = width / 2;
const GROUND = 400;

function bg() {
  ctx.fillStyle = "cyan";
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "blue";
  ctx.fillRect(0, GROUND, width, 100); // ground

  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(800, -10, 80, 0, 2 * Math.PI); //sun
  ctx.fill();
}

function snowman() {
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(MID, GROUND - 265, 40, 0, 2 * Math.PI); // head
  ctx.fill();
  ctx.beginPath();
  ctx.arc(MID, GROUND - 160, 70, 0, 2 * Math.PI); // upper torso
  ctx.fill();
  ctx.beginPath();
  ctx.arc(MID, GROUND, 100, 0, 2 * Math.PI); // lower torso
  ctx.fill();

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(MID - 15, GROUND - 275, 5, 0, 2 * Math.PI); // left eye
  ctx.arc(MID + 15, GROUND - 275, 5, 0, 2 * Math.PI); // right eye
  ctx.fill();

  ctx.beginPath();
  ctx.arc(MID, GROUND - 238, 20, Math.PI, 2 * Math.PI); // smile
  ctx.stroke();

  ctx.save();

  ctx.fillStyle = "orange";
  ctx.translate(MID, GROUND - 270);
  ctx.beginPath();
  ctx.lineTo(0, 0);
  ctx.lineTo(0, 10);
  ctx.lineTo(10, 0);
  ctx.lineTo(0, 0);
  ctx.strokeStyle = "orange";
  ctx.stroke();
  ctx.fill();

  ctx.restore();

  ctx.beginPath();
  ctx.moveTo(MID - 50, GROUND - 160);
  ctx.lineTo(MID - 140, GROUND - 160); // left arm
  ctx.stroke();

  ctx.moveTo(MID + 50, GROUND - 160);
  ctx.lineTo(MID + 140, GROUND - 200); // right arm
  ctx.stroke();

  ctx.moveTo(MID - 50, GROUND - 300);
  ctx.lineTo(MID + 50, GROUND - 300); // brim of hat
  ctx.stroke();

  ctx.fillRect(MID - 30, GROUND - 340, 60, 40);

  ctx.save();
  ctx.fillStyle = "red";
  ctx.translate(395, 200);
  ctx.beginPath();
  ctx.arc(5, 0, 5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(5, 70, 5, 0, 2 * Math.PI);
  ctx.fill();

  ctx.restore();
}
function name() {
  ctx.font = "20px Georgia ";
  ctx.fillStyle = "orange";

  ctx.fillText("Your Name", 10, 15);
}
let x = 20;
function move() {
  ctx.save();
  bg();
  name();
  ctx.translate(x, 0);
  snowman();
  x += 20;
  ctx.restore();
}
