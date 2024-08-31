import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 임포트
import { ReactComponent as Lock } from '../../src/assets/lock.svg';

export default function ReceivedBubbleDetail() {
  const navigate = useNavigate(); // useNavigate 훅 초기화

  const handleYesClick = () => {
    // navigate('/exchange-form'); // exchangeform 페이지로 이동
    alert("수락되었습니다.")
    navigate('/requested-bubbles')
  };
  const handleNoClick = () => {
    alert("거절되었습니다.")
    navigate('/requested-bubbles')
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen relative">
      <div className="flex flex-col justify-center items-center border-[#90CCDA] rounded-full w-[688px] h-[688px] border-2 border-solid relative">
        <div className="text-center w-[400px] h-[400px] overflow-scroll ">
          <div className="mb-4">
            <p className="text-3xl">제목</p>
          </div>
          <div className="pb-4 flex justify-center items-center gap-2">
            <p>작성자 김진성 2024.08.31</p>
            <button
              onClick={handleYesClick}
              className="px-2 py-1 bg-[#0094FF] text-white rounded-xl"
            >
              수락하기
            </button>
            <button
              onClick={handleNoClick}
              className="px-2 py-1 bg-[#F94244] text-white rounded-xl"
            >
              거절하기
            </button>
          </div>
          <div className="pb-4">
            내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다니다내용입니다
          </div>
          <div className="flex justify-center">
          <Lock />
          </div>
        </div>
      </div>
    </div>
  );
}