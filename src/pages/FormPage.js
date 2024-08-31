import React, { useState } from 'react';
import GNB from '../components/GNB';

export default function FormPage() {
  // input과 textarea 값을 상태로 관리
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // 버튼 클릭 시 실행될 함수
  const handleSubmit = async () => {
    // 요청을 보낼 데이터 구성
    const data = {
      title: title,
      content: content,
      preview: '',
      userId: sessionStorage.getItem('userId'),
      tag: '',
      image: '',
    };

    try {
      // fetch 요청을 POST 메서드로 전송
      const response = await fetch(`back/api/post`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // JSON 형식으로 전송
        },
        body: JSON.stringify(data), // 데이터를 문자열로 변환
      });

      if (response.ok) {
        // 요청이 성공한 경우 처리
        console.log('경험이 성공적으로 작성되었습니다.');
      } else {
        // 요청이 실패한 경우 처리
        console.error('서버 오류가 발생했습니다.');
      }
    } catch (error) {
      // 네트워크 오류 등 처리
      console.error('요청을 보내는 중 오류 발생:', error);
    }
  };

  return (
    <div className="relative flex justify-center items-center w-screen h-screen overflow-clip">
      <div className="z-30">
        <GNB />
      </div>
      {/* 배경 원들 */}
      <div className="absolute bg-transparent border border-[#90CCDA] rounded-full w-[400px] h-[400px] top-[0%] left-[0%] z-10"></div>
      <div className="absolute bg-transparent border border-[#90CCDA] rounded-full w-[300px] h-[300px] bottom-[3%] left-[10%] z-10"></div>
      <div className="absolute bg-transparent border border-[#90CCDA] rounded-full w-[150px] h-[150px] top-[20%] right-[3%] z-10"></div>

      {/* 중앙 원 */}
      <div className="flex flex-col justify-center items-center border-[#90CCDA] rounded-full w-[970px] h-[970px] border-2 border-solid bg-white z-20 overflow-hidden">
        <div className="text-center w-[550px] h-[650px] flex flex-col justify-center">
          <div>
            <input
              className="text-3xl pb-6 outline-none text-black placeholder-[#ABB4BB] w-full"
              type="text"
              placeholder="제목을 입력해주세요."
              value={title}
              onChange={e => setTitle(e.target.value)} // 상태 업데이트
            />
          </div>
          <div>
            <textarea
              className="outline-none text-black placeholder-[#ABB4BB] w-full h-[500px] pt-6"
              rows="5"
              placeholder="내용을 입력해주세요."
              value={content}
              onChange={e => setContent(e.target.value)} // 상태 업데이트
            />
          </div>
          <div className="flex justify-center">
            <button
              className="flex justify-center items-center w-[360px] bg-[#90CCDA] text-white py-4 rounded"
              onClick={handleSubmit} // 버튼 클릭 시 요청 전송
            >
              경험 작성 완료하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
