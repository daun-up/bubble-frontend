import React from 'react';
import profileImage from '../assets/profile.png'; // 이미지 파일을 import

export default function ProfilePage() {
  return (
    <div className="relative flex justify-center items-center w-screen h-screen overflow-clip">
      {/* 배경 원들 */}
      <div className="absolute bg-transparent border border-[#90CCDA] rounded-full w-[120px] h-[120px] top-[10%] left-[6%] z-10"></div>
      <div className="absolute bg-transparent border border-[#90CCDA] rounded-full w-[300px] h-[300px] bottom-[3%] left-[10%] z-10"></div>
      <div className="absolute bg-transparent border border-[#90CCDA] rounded-full w-[150px] h-[150px] top-[40%] right-[8%] z-10"></div>

      {/* 중앙 원 */}
      <div className="flex flex-col justify-center items-center border-[#90CCDA] rounded-full w-[700px] h-[700px] border-2 border-solid bg-white z-20 overflow-hidden">
        <div className="text-center w-[550px] h-[650px] flex flex-col justify-center">
          <div className="flex flex-col items-center">
            <img src={profileImage} alt="profile" className="w-[200px] h-[200px] rounded-full" />
            <p className="font-semibold text-3xl">김진성</p>
          </div>
          <div className="pt-5">
            <p>안녕하세요. 김진성입니다. 사교성이 좋습니다.</p>
          </div>
          <div className="flex justify-center pt-5 gap-1">
            <p className="font-semibold text-[#90CCDA] pr-1">keyword</p>
            <p>공군 어학병</p>
            <p>자취</p>
            <p>복학</p>
            <p>미국거주</p>
          </div>


        </div>
      </div>
    </div>
  );
}