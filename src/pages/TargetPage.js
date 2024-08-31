import React from 'react';
import {ReactComponent as Lock} from '../../src/assets/lock.svg'
export default function TargetPage() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex justify-center border-[#90CCDA] rounded-full w-[688px] h-[688px] border-2 border-solid">
        <div>
          <p>제목</p>
        </div>
        <div>
          <p>작성자 김진성 2024.08.31</p>
        </div>
        <div>
          <Lock/>
        </div>

      </div>
    </div>
  );
}