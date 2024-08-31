import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Child({ data }) {
  const navigate = useNavigate();

  const colors = ['#ECFAFE', '#90CCDA', '#BEDBE2']; // 사용 가능한 색상들
  const [backgroundColor] = useState(() => colors[Math.floor(Math.random() * colors.length)]);

  // 배경색에 따라 글자색을 설정
  const textColor = backgroundColor === '#6482AD' || backgroundColor === '#7FA1C3' ? '#FFFFFF' : '#000000';

  const handleClick = () => {
    navigate('/target'); // '/target-page'는 이동할 페이지 경로입니다.
  };

  return (
    <div
      className="flex justify-center w-full h-full rounded-full cursor-pointer transform transition-transform duration-300 hover:scale-125"
      style={{ backgroundColor, color: textColor }} // 배경색과 글자색 설정
      onClick={handleClick}
    >
      <p className="content-center">{data}</p>
    </div>
  );
}