import React from 'react';
import GNB from '../components/GNB';

export default function FormPage() {
  return (
    <div className="relative flex justify-center items-center w-screen h-screen overflow-clip">
      <div className="z-30">
        <GNB />
      </div>
      {/* 배경 원들 */}
      <div
        className="absolute bg-transparent border border-[#90CCDA] rounded-full w-[400px] h-[400px] top-[0%] left-[0%] z-10"></div>
      <div
        className="absolute bg-transparent border border-[#90CCDA] rounded-full w-[300px] h-[300px] bottom-[3%] left-[10%] z-10"></div>
      <div
        className="absolute bg-transparent border border-[#90CCDA] rounded-full w-[150px] h-[150px] top-[20%] right-[3%] z-10"></div>

      {/* 중앙 원 */}
      <div
        className="flex flex-col justify-center items-center border-[#90CCDA] rounded-full w-[970px] h-[970px] border-2 border-solid bg-white z-20 overflow-hidden">
        <div className="text-center w-[550px] h-[650px] flex flex-col justify-center">
          <div>
            <input
              className="text-3xl pb-6 outline-none text-black placeholder-[#ABB4BB] w-full"
              type="text"
              placeholder="제목을 입력해주세요."
            />
          </div>
          <div>
            <textarea
              className="outline-none text-black placeholder-[#ABB4BB] w-full h-[500px] pt-6"
              rows="5"
              placeholder="내용을 입력해주세요."
            />
          </div>
          <div className="flex justify-center">
            <button className="flex justify-center items-center w-[360px] bg-[#90CCDA] text-white py-4 rounded">
              경험 작성 완료하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}