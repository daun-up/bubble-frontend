import { useEffect } from 'react';
const BubbleBackground = () => {
  useEffect(() => {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const circles = [];
    const numCircles = 4;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initCircles();
    }

    function initCircles() {
      circles.length = 0;
      for (let i = 0; i < numCircles; i++) {
        circles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 60 + 20,
          dx: Math.random() * 2 - 1,
          dy: Math.random() * 2 - 1,
        });
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#90CCDA';

      circles.forEach(circle => {
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fill();

        circle.x += circle.dx;
        circle.y += circle.dy;

        if (
          circle.x + circle.radius > canvas.width ||
          circle.x - circle.radius < 0
        ) {
          circle.dx = -circle.dx;
        }
        if (
          circle.y + circle.radius > canvas.height ||
          circle.y - circle.radius < 0
        ) {
          circle.dy = -circle.dy;
        }
      });

      requestAnimationFrame(animate);
    }

    initCircles();
    animate();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  return (
    <>
      <canvas
        className="absolute top-0 left-0 w-screen h-screen"
        style={{ zIndex: '-10' }}
      ></canvas>

      {/* 흰색 블러 처리 div */}
      <div
        className="absolute top-0 left-0 w-screen h-screen bg-white opacity-50"
        style={{ zIndex: '-5', backdropFilter: 'blur(50px)' }}
      ></div>
    </>
  );
};
export default BubbleBackground;
