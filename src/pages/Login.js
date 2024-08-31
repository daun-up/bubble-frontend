import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BubbleBackground from '../components/BubbleBackground';

const Login = () => {
  // 상태 변수 선언
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // 폼 제출 핸들러
  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch('back/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      // 응답 상태 확인
      if (!response.ok) {
        throw new Error('로그인 실패: 서버 응답 오류');
      }

      const data = await response.json();
      console.log('로그인 성공:', data);
      sessionStorage.setItem('name', name);
      sessionStorage.setItem('email', email);
      sessionStorage.setItem('password', password);
      sessionStorage.setItem('userId', data.user.id);
      console.log('userId: ', data.userId);
      navigate('/');

      // 로그인 성공 후 처리 (예: 리다이렉트, 상태 업데이트 등)
    } catch (error) {
      // 오류 처리
      console.error('로그인 실패:', error);
      alert('로그인 실패');
    }
  };
  return (
    <div className="relative w-screen h-screen flex justify-center items-center">
      <BubbleBackground />
      <div
        className="flex flex-col justify-around"
        style={{
          width: '30vw',
          height: '90vh',
          zIndex: '10',
          position: 'relative',
          borderRadius: '25px',
          background: 'rgba(255, 255, 255, 0.5)',
          backdropFilter: 'blur(10px)',
          // boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
        }}
      >
        {/* logo */}
        <div className="flex flex-col gap-2 text-center">
          <p className="logo">방울</p>
          <p className="logo_sub">경험과 경험을 교환하다</p>
        </div>
        {/* login form */}
        <div>
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <input
              className="px-4 py-3 rounded-xl"
              style={{ border: '2px solid #90CCDA' }}
              type="text"
              placeholder="이름을 입력해주세요"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <input
              className="px-4 py-3 rounded-xl"
              style={{ border: '2px solid #90CCDA' }}
              type="text"
              placeholder="이메일을 입력해주세요"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              className="px-4 py-3 rounded-xl"
              style={{ border: '2px solid #90CCDA' }}
              type="password"
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <input
              className="mt-10 px-4 py-3 rounded-xl bg-[#90CCDA] text-white cursor-pointer"
              style={{ border: '2px solid #90CCDA' }}
              type="submit"
              value="로그인 하기"
            />
          </form>
          <p className="text-right">
            처음이신가요? <Link to="/signup">회원가입하기</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
