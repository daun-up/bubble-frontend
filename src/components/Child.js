import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Child({ data, id, defaultPath, detailPath }) {
  const navigate = useNavigate();
  const location = useLocation();

  const colors = ['#ECFAFE', '#90CCDA', '#BEDBE2'];
  const [backgroundColor] = useState(
    () => colors[Math.floor(Math.random() * colors.length)],
  );
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const textColor = '#FFFFFF';

  const handleClick = () => {
    if (location.pathname === defaultPath) {
      navigate(`${detailPath}/${id}`);
    } else {
      navigate(`/bubble/${id}`);
    }
  };

  useEffect(() => {
    setPosition({
      x: Math.floor(Math.random() * 40) - 20,
      y: Math.floor(Math.random() * 40) - 20,
    });

    const interval = setInterval(() => {
      setPosition({
        x: Math.floor(Math.random() * 40) - 20,
        y: Math.floor(Math.random() * 40) - 20,
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex justify-center w-full h-full rounded-full cursor-pointer transform transition-transform duration-1000 hover:scale-125 relative"
      style={{
        backgroundColor,
        color: textColor,
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 3s linear 0s',
        backgroundImage: `url(${data.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      onClick={handleClick}
    >
      {/* 불투명한 막 */}
      <div
        className="absolute inset-0 bg-black opacity-50 rounded-full"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // 불투명한 검은색 막
        }}
      ></div>

      {/* 텍스트 */}
      <p className="relative z-10 content-center text-white">{data.title}</p>
    </div>
  );
}