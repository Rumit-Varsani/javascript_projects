let playerX = 50, playerY = 50;
    let targetX = 300, targetY = 300;
    let speed = 10;
    let score = 0;

    const targetRadius = 25; // Half of target's width (50px / 2)
    const playerRadius = 50; // Half of player's width (100px / 2)
    const scoreDisplay = document.getElementById("score");

    function movetotargetrandomly() {
      const target = document.querySelector(".target");
      const randomx = Math.random() * (window.innerWidth - 50);
      const randomy = Math.random() * (window.innerHeight - 50);

      target.style.left = `${randomx}px`;
      target.style.top = `${randomy}px`;
      
      // Update global target coordinates for collision detection:
      targetX = randomx;
      targetY = randomy;
      
      console.log("Target moved to:", randomx, randomy);
    }

    document.addEventListener("keydown", function(e) {
      const windowWidth = window.innerWidth - 100;
      const windowHeight = window.innerHeight - 100;
      const player = document.querySelector(".player");

      if (e.key === "ArrowRight" && playerX < windowWidth) {
        playerX += speed;
      } else if (e.key === "ArrowLeft" && playerX > 0) {
        playerX -= speed;
      } else if (e.key === "ArrowDown" && playerY < windowHeight) {
        playerY += speed;
      } else if (e.key === "ArrowUp" && playerY > 0) {
        playerY -= speed;
      }

      player.style.left = `${playerX}px`;
      player.style.top = `${playerY}px`;

      // Call collision check after moving
      Checkcollision();
    });

    function Checkcollision() {
      const dx = playerX - targetX;
      const dy = playerY - targetY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < playerRadius + targetRadius) {
        score++;
        scoreDisplay.innerText = `Score: ${score}`;
        movetotargetrandomly();
      }
    }

    // Initial call to place the target randomly
    movetotargetrandomly();