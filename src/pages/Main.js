import { useState } from 'react';

const Main = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div style={{ backgroundColor: 'black', width: '100vw', height: '100vh' }}>
      <nav
        className="flex items-center"
        style={{
          display: 'flex',
          justifyContent: 'end',
          padding: '4px 16px',
          height: '74px',
          color: 'white',
          WebkitBackdropFilter: 'blur(2px)',
          backdropFilter: 'blur(2px)',
          boxShadow:
            'inset 0 2px 6px rgba(255, 255, 255, 0.25), inset 0 -8px 40px rgba(255, 255, 255, 0.08)',
          position: 'relative',
        }}
      >
        <div onClick={toggleMenu} className="relative">
          <p className="cursor-pointer text-2xl">☰</p> {/* 햄버거 아이콘 */}
        </div>
      </nav>
      <div
        style={{
          position: 'fixed',
          backgroundColor: 'white',
          top: '74px',
          right: '0px',
          width: isMenuOpen ? '30vw' : '0',
          height: '80vh',
          zIndex: 1000,
          padding: '1rem 1.5rem',
          color: 'black',
          WebkitBackdropFilter: 'blur(2px)',
          backdropFilter: 'blur(2px)',
          boxShadow:
            'inset 0 2px 6px rgba(255, 255, 255, 0.25), inset 0 -8px 40px rgba(255, 255, 255, 0.08)',
          overflow: 'hidden',
          transition: 'width 0.3s ease-out', // width 애니메이션 적용
        }}
      >
        {isMenuOpen && (
          <div
            style={{
              opacity: isMenuOpen ? 1 : 0,
              transition: 'opacity 0.3s ease-out',
            }}
            className="flex flex-col"
          >
            <div>프로필 영역</div>
            <button>내 경험 방울</button>
            <button>요청받은 방울</button>
            <button>요청한 방울</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
