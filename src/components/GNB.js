import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const GNB = () => {
  // const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* 되냐?2 */}
      {/* 햄버거 아이콘 */}
      <div
        onClick={toggleMenu}
        className="fixed top-4 right-4 cursor-pointer z-20"
        style={{ color: '#90CCDA' }}
      >
        <p className="text-2xl">☰</p>
      </div>
      {/* 메뉴  */}
      <div
        className={`fixed bg-white right-0 z-10 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{
          top: '0.5vh',
          width: '30vw',
          height: '99vh',
          border: '1.5px solid #90CCDA',
          borderRadius: '25px 0px 0px 25px',
        }}
      >
        <div
          className="flex flex-col w-full h-full"
          style={{ padding: '1rem 0' }}
        ></div>
      </div>
    </>
  );
};

export default GNB;
