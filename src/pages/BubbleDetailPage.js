import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 임포트
import { ReactComponent as Lock } from '../../src/assets/lock.svg';
import GNB from '../components/GNB';

export default function BubbleDetailPage() {
  const [circles, setCircles] = useState([]);
  const navigate = useNavigate(); // useNavigate 훅 초기화

  const makeCircle = () => {
    const centralRadius = 344; // 중앙 원의 반지름 (688px / 2)
    const buffer = 65 + 20; // 동그라미 반지름(65px) + 추가 간격 (20px)
    const minDistance = centralRadius + buffer; // 중앙 원 경계로부터의 최소 거리
    const maxDistance = centralRadius + 300; // 최대 거리 (조정 가능)

    const centerX = window.innerWidth / 2; // 화면의 가로 중앙
    const centerY = window.innerHeight / 2; // 화면의 세로 중앙

    let x, y;

    // 중앙 원 바깥의 랜덤 위치를 찾을 때까지 반복
    do {
      const angle = Math.random() * 2 * Math.PI; // 랜덤 각도
      const distance =
        minDistance + Math.random() * (maxDistance - minDistance); // 거리 계산

      // 동그라미의 랜덤 위치 계산
      x = centerX + distance * Math.cos(angle);
      y = centerY + distance * Math.sin(angle);
    } while (
      x < 0 + buffer ||
      y < 0 + buffer ||
      x > window.innerWidth - buffer ||
      y > window.innerHeight - buffer
    );

    // 새로운 동그라미 추가
    setCircles([...circles, { id: circles.length, x, y }]);
  };

  const handleRequestClick = () => {
    makeCircle();
    navigate('/exchange-form'); // exchangeform 페이지로 이동
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen relative">
      <div className="z-30">
        <GNB />
      </div>
      <div
        className=" flex flex-col justify-center items-center border-[#90CCDA] rounded-full w-[688px] h-[688px] border-2 border-solid relative"
        style={{
          background: 'rgba(255, 255, 255, 0.5)' /* 배경 색상 및 투명도 설정 */,
          backdropFilter: 'blur(10px)' /* 블러 효과 설정 */,
        }}
      >
        <div className="text-center w-[400px] h-[400px] overflow-scroll scroll-container">
          <div className="mb-4">
            <p className="text-3xl text-left">제목</p>
          </div>
          <div className="pb-4 flex justify-between items-center gap-2 ">
            <p>작성자 김진성 2024.08.31</p>
            <button
              onClick={handleRequestClick}
              className="px-2 py-1 bg-[#90CCDA] text-white rounded-xl"
            >
              요청하기
            </button>
          </div>
          <div className="pb-4 text-left">
            내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다니다내용입니다
          </div>
          <div className="flex justify-center">
            <Lock />
          </div>
        </div>
      </div>
      {/* 중앙 원 바깥에 동그라미 렌더링 */}
      {circles.map(circle => (
        <div
          key={circle.id}
          className="absolute w-[70px] h-[70px] bg-[#90CCDA] rounded-full animate-pop"
          style={{ top: `${circle.y - 65}px`, left: `${circle.x - 65}px` }}
        ></div>
      ))}
    </div>
  );
}