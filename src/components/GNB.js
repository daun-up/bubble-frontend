import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GNB = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        onClick={toggleMenu}
        className="fixed top-4 right-4 cursor-pointer z-20"
        style={{ color: '#90CCDA' }}
      >
        <p className="text-2xl">☰</p> {/* 햄버거 아이콘 */}
      </div>
      {isMenuOpen && (
        <div
          className="fixed bg-white right-0 z-10 "
          style={{
            top: '0.5vh',
            width: isMenuOpen ? '30vw' : '0',
            height: '99vh',
            border: '1.5px solid #90CCDA',
            borderRadius: '25px 0px 0px 25px',
          }}
        >
          <div
            className="flex flex-col w-full h-full"
            style={{ padding: '1rem 0' }}
          >
            <div className="flex items-center m-6 gap-6">
              <div
                className="w-10 h-10"
                style={{ backgroundColor: '#90CCDA', borderRadius: '25px' }}
              ></div>
              <span>김진성</span>
            </div>
            <button
              className="w-full hover:bg-gray-100"
              style={{
                padding: '1rem 1.5rem',
                borderTop: '1.5px solid #90CCDA',
                color: '#90CCDA',
              }}
              onClick={() => {
                navigate('/my-bubbles');
              }}
            >
              내 경험 방울
            </button>
            <button
              className="w-full hover:bg-gray-100"
              style={{
                padding: '1rem 1.5rem',
                borderTop: '1.5px solid #90CCDA',
                color: '#90CCDA',
              }}
              onClick={() => {
                navigate('/received-bubbles');
              }}
            >
              요청받은 방울
            </button>
            <button
              className="w-full hover:bg-gray-100"
              style={{
                padding: '1rem 1.5rem',
                borderTop: '1.5px solid #90CCDA',
                color: '#90CCDA',
              }}
              onClick={() => {
                navigate('/requested-bubbles');
              }}
            >
              요청한 방울
            </button>
            <button
              className="w-full hover:bg-gray-100"
              style={{
                padding: '1rem 1.5rem',
                borderTop: '1.5px solid #90CCDA',
                borderBottom: '1.5px solid #90CCDA',
                color: '#90CCDA',
              }}
            >
              사용설명
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GNB;
