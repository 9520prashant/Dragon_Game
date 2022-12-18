score = 0;
cross = true;
let audio = new Audio('bg.mp3');
let audiogo = new Audio('GameOver.wav');
setTimeout(() => {
    audio.play();
}, 1000);
document.onkeydown = function (e) {
  console.log("Key code is:", e.keyCode);
  if (e.keyCode == 38) {
    dino = document.querySelector(".dino");
    dino.classList.add("animateDino");
    setTimeout(() => {
      dino.classList.remove("animateDino");
    }, 700);
  }
  if (e.keyCode == 39) {
    dino = document.querySelector(".dino");
    dinox = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinox + 112 + "px";
  }
  if (e.keyCode == 37) {
    dino = document.querySelector(".dino");
    dinox = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = (dinox - 112) + "px";
  }
};

setInterval(() => {
  dino = document.querySelector(".dino");
  gameover = document.querySelector(".gameover");
  obstacle = document.querySelector(".obstacle");
  dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
  dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));

  ox = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("left")
  );
  oy = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("top")
  );

  offsetX = Math.abs(dx - ox);
  offsetY = Math.abs(dy - oy);
  if (offsetX < 113 && offsetY < 52) {
    console.log(offsetX, offsetY);
    gameover.innerHTML = "Game Over Reload to Start Again!"
    obstacle.classList.remove('obstacleAni');
    audiogo.play();
    setTimeout(() => {
      audiogo.pause();
      audio.pause();
    }, 1000);
    } else if (cross && offsetX < 100) {
    score += 1;
    updateScore(score);
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000);
    setTimeout(() => {
      aniDur = parseFloat(
        window
          .getComputedStyle(obstacle, null)
          .getPropertyValue("animation-duration")
      );
      // if(aniDur > ){

      // }
      newDur = aniDur - 0.2;
      obstacle.style.animationDuration = newDur + "s";
      // console.log("New Animation Duration: ", newDur);
    }, 1000);
  }
}, 100);
function updateScore(score) {
  scoreCont.innerHTML = "Your Score: " + score;
}
