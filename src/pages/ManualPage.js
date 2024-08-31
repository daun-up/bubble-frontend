import React from 'react';
import { ReactComponent as Bubble } from '../../src/assets/bubbles.svg';

export default function ManualPage() {

  return (
    <div className="flex justify-center items-center w-screen h-screen relative">
      <div className="absolute bg-[#E3F4FA] rounded-full w-[200px] h-[200px] top-[10%] left-[5%] opacity-70"></div>
      <div className="absolute bg-[#E3F4FA] rounded-full w-[300px] h-[300px] top-[4%] right-[4%] opacity-50"></div>
      <div className="absolute bg-[#E3F4FA] rounded-full w-[150px] h-[150px] bottom-[15%] left-[15%] opacity-60"></div>
      <div className="absolute bg-[#E3F4FA] rounded-full w-[250px] h-[250px] bottom-[5%] right-[15%] opacity-50"></div>
      <div className="absolute bg-[#E3F4FA] rounded-full w-[100px] h-[100px] top-[50%] left-[50%] opacity-50"></div>

      <div
        className="flex flex-col justify-center items-center border-[#90CCDA] rounded-full w-[688px] h-[688px] border-2 border-solid relative">
        <div className="w-[470px] overflow-scroll ">
          <div className="pb-10 text-center">
            <p className="text-3xl">경험과 경험을 교환할 수 있어요</p>
          </div>

          <div className="flex items-center pb-5 gap-3">
            <div>
              <Bubble />
            </div>
            <p className="text-[18px]">마음에 드는 경험을 끝까지 보고 싶을 땐 요청해요</p>
          </div>

          <div className="flex items-center pb-5 gap-3">
            <div>
              <Bubble />
            </div>
            <p className="text-[18px]">마음에 드는 경험을 끝까지 보고 싶을 땐 요청해요</p>
          </div>

          <div className="flex items-center pb-5 gap-3">
            <div>
              <Bubble />
            </div>
            <p className="text-[18px]">마음에 드는 경험을 끝까지 보고 싶을 땐 요청해요</p>
          </div>

          <div className="flex items-center pb-5 gap-3">
            <div>
              <Bubble />
            </div>
            <p className="text-[18px]">학업 경험, 취미 경험, 여행 경험, 진로 경험, 문화 경험 등
              다양한 경험을 방울! 해보세요.</p>
          </div>

          <div className="flex items-center pb-5 gap-3">
            <div>
              <Bubble />
            </div>
            <div className="text-left">
              <p className="text-[18px]">마음에 드는 경험을 끝까지 보고 싶을 땐 요청해요</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}