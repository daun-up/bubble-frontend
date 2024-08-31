import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
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
    <div className="relative w-screen h-screen flex justify-center items-center">
      <canvas
        className="absolute top-0 left-0 w-screen h-screen"
        style={{ zIndex: '-10' }}
      ></canvas>

      {/* 흰색 블러 처리 div */}
      <div
        className="absolute top-0 left-0 w-screen h-screen bg-white opacity-50"
        style={{ zIndex: '-5', backdropFilter: 'blur(50px)' }}
      ></div>

      <div
        className="flex flex-col justify-around"
        style={{
          width: '40vw',
          height: '90vh',
          zIndex: '10',
          position: 'relative',
        }}
      >
        {/* logo */}
        <div className="flex flex-col gap-2 text-center">
          <p className="logo">방울</p>
          <p className="logo_sub">경험과 경험을 교환하다</p>
        </div>
        {/* login form */}
        <div>
          <form className="flex flex-col gap-2">
            <input
              className="px-4 py-3 rounded-xl"
              style={{ border: '2px solid #90CCDA' }}
              type="text"
              placeholder="이름을 입력해주세요"
            />
            <input
              className="px-4 py-3 rounded-xl"
              style={{ border: '2px solid #90CCDA' }}
              type="text"
              placeholder="이메일을 입력해주세요"
            />
            <input
              className="px-4 py-3 rounded-xl"
              style={{ border: '2px solid #90CCDA' }}
              type="password"
              placeholder="비밀번호를 입력해주세요"
            />
            <input
              className="mt-10 px-4 py-3 rounded-xl bg-[#90CCDA] text-white"
              style={{ border: '2px solid #90CCDA' }}
              type="submit"
              value="로그인 하기"
            />
          </form>
          <p className="text-right">
            처음이신가요? <Link to="/signup">회원가입하기</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
