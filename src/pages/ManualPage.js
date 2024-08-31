import React from 'react';
import { ReactComponent as Bubble } from '../../src/assets/bubbles.svg';

export default function ManualPage() {

  return (
    <div className="flex justify-center items-center w-screen h-screen relative">
      <div className="flex flex-col justify-center items-center border-[#90CCDA] rounded-full w-[688px] h-[688px] border-2 border-solid relative">
        <div className="text-left w-[480px] overflow-scroll ">
          <div className="pb-10">
            <p className="text-3xl">경험과 경험을 교환할 수 있어요</p>
          </div>

          <div className="flex items-center pb-5 gap-3">
            <Bubble />
            <p className="text-[18px]">마음에 드는 경험을 끝까지 보고 싶을 땐 요청해요</p>
          </div>

          <div className="flex items-center pb-5 gap-3">
            <Bubble />
            <p className="text-[18px]">마음에 드는 경험을 끝까지 보고 싶을 땐 요청해요</p>
          </div>

          <div className="flex items-center pb-5 gap-3">
            <Bubble />
            <p className="text-[18px]">마음에 드는 경험을 끝까지 보고 싶을 땐 요청해요</p>
          </div>

          <div className="flex items-center pb-5 gap-3">
            <Bubble />
            <p className="text-[18px]">학업 경험, 취미 경험, 여행 경험, 진로 경험, 문화 경험 등 다양한 경험을 방울! 해보세요.</p>
          </div>

          <div className="flex items-center pb-5 gap-3">
            <Bubble />
            <p className="text-[18px]">마음에 드는 경험을 끝까지 보고 싶을 땐 요청해요</p>
          </div>

        </div>
      </div>
    </div>
  );
}