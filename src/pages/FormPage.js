import React, { useState } from 'react';
import GNB from '../components/GNB';

export default function FormPage() {
  const [previewText, setPreviewText] = useState('');
  const [selectedImage, setSelectedImage] = useState(null); // 이미지 상태 관리
  const [selectedCategory, setSelectedCategory] = useState(''); // 선택된 카테고리 상태 관리

  const categories = ['학업', '취미', '여행', '진로', '문화'];

  const handlePreviewChange = (e) => {
    if (e.target.value.length <= 150) {
      setPreviewText(e.target.value);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

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
              className="text-3xl py-3 outline-none text-black placeholder-[#ABB4BB] w-full"
              type="text"
              placeholder="제목을 입력해주세요."
            />
          </div>
          {/* 카테고리 선택 */}
          <div className="flex gap-1 py-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-4 py-1 rounded-full border border-[#90CCDA] ${
                  selectedCategory === category ? 'bg-[#90CCDA] text-white' : 'bg-white text-[#90CCDA]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          {/* 사진 입력 */}
          <div className="py-4 flex items-center justify-between">
            <label
              className="flex justify-center items-center bg-[#90CCDA] text-white py-2 px-4 rounded cursor-pointer"
              htmlFor="file-upload"
            >
              파일 업로드
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden" // 숨김
            />
            {selectedImage && (
              <div className="pl-4 w-24 h-24 overflow-hidden rounded-lg border border-gray-300">
                <img
                  src={selectedImage}
                  alt="미리보기"
                  className="object-cover w-full h-full"
                />
              </div>
            )}
          </div>
          <div>
            <textarea
              className="outline-none text-black placeholder-[#ABB4BB] w-full h-[100px] p-2"
              rows="5"
              placeholder="미리보기로 보여질 내용을 150 자 이내로 입력해주세요."
              value={previewText}
              onChange={handlePreviewChange}
            />
          </div>
          <div className="py-4">
            <textarea
              className="outline-none text-black placeholder-[#ABB4BB] w-full h-[250px] p-2"
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