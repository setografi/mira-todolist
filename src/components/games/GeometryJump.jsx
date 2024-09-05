import React, { useEffect, useRef, useState } from "react";

function Game() {
  const canvasRef = useRef(null);
  const [playerY, setPlayerY] = useState(150); // Posisi awal player (y-axis)
  const [obstacles, setObstacles] = useState([]); // Daftar rintangan
  const [score, setScore] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [velocity, setVelocity] = useState(0); // Kecepatan lompat
  const gravity = 1.5; // Gravitasi

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrameId;

    // Buat rintangan segitiga
    const generateObstacles = () => {
      const obstacleSize = Math.random() > 0.5 ? 20 : 40; // Segitiga kecil/besar
      return { x: canvas.width, size: obstacleSize };
    };

    const gameLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Player (kotak)
      ctx.fillStyle = "#3490dc"; // Warna Tailwind 'blue'
      ctx.fillRect(50, playerY, 20, 20); // Player kotak

      // Gerakan rintangan
      const newObstacles = obstacles
        .map((obstacle) => ({
          ...obstacle,
          x: obstacle.x - 5, // Kecepatan bergerak ke kiri
        }))
        .filter((obstacle) => obstacle.x > -obstacle.size); // Hapus rintangan yang keluar layar

      if (Math.random() < 0.01) {
        newObstacles.push(generateObstacles());
      }

      setObstacles(newObstacles);

      // Gambar rintangan (segitiga)
      newObstacles.forEach((obstacle) => {
        ctx.fillStyle = obstacle.size === 20 ? "#ffed4a" : "#e3342f"; // Segitiga kecil/besar
        ctx.beginPath();
        ctx.moveTo(obstacle.x, canvas.height - obstacle.size);
        ctx.lineTo(obstacle.x + obstacle.size, canvas.height);
        ctx.lineTo(obstacle.x - obstacle.size, canvas.height);
        ctx.closePath();
        ctx.fill();

        // Cek apakah player melewati segitiga
        if (
          obstacle.x === 50 &&
          playerY + 20 >= canvas.height - obstacle.size
        ) {
          alert("Game Over!");
          setScore(0); // Reset skor
          setObstacles([]);
        } else if (obstacle.x === 50) {
          setScore(score + (obstacle.size === 20 ? 10 : 20)); // Skor berdasarkan ukuran segitiga
        }
      });

      // Lompat dan gravitasi
      if (isJumping) {
        setVelocity((prev) => prev - 1);
        setPlayerY((prev) => Math.max(prev - velocity, 0)); // Batas atas canvas
        if (playerY >= 150) {
          setIsJumping(false); // Kembali ke tanah
          setVelocity(0);
        }
      } else if (playerY < 150) {
        setPlayerY((prev) => Math.min(prev + gravity, 150)); // Kembali ke tanah dengan gravitasi
      }

      animationFrameId = requestAnimationFrame(gameLoop);
    };

    gameLoop();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [playerY, obstacles, score, isJumping, velocity]);

  // Tombol untuk lompat
  const handleJump = () => {
    if (!isJumping) {
      setIsJumping(true);
      setVelocity(10); // Kecepatan lompat
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl mb-4">React Dino Game</h1>
      <canvas
        ref={canvasRef}
        width={800}
        height={200}
        className="border border-gray-400"
      ></canvas>
      <div className="mt-4">
        <button
          onClick={handleJump}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Jump
        </button>
      </div>
      <div className="mt-4 text-lg">Score: {score}</div>
    </div>
  );
}

export default Game;
