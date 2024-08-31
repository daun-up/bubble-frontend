import React from 'react';
import { Link } from 'react-router-dom';
import BubbleBackground from '../components/BubbleBackground';
const Login = () => {
  return (
    <div className="relative w-screen h-screen flex justify-center items-center">
      <BubbleBackground />
      <div
        className="flex flex-col justify-around"
        style={{
          width: '40vw',
          height: '90vh',
          zIndex: '10',
          position: 'relative',
        }}
      >
        {/* logo */}
        <div className="flex flex-col gap-2 text-center">
          <p className="logo">방울</p>
          <p className="logo_sub">경험과 경험을 교환하다</p>
        </div>
        {/* login form */}
        <div>
          <form className="flex flex-col gap-2">
            <input
              className="px-4 py-3 rounded-xl"
              style={{ border: '2px solid #90CCDA' }}
              type="text"
              placeholder="이름을 입력해주세요"
            />
            <input
              className="px-4 py-3 rounded-xl"
              style={{ border: '2px solid #90CCDA' }}
              type="text"
              placeholder="이메일을 입력해주세요"
            />
            <input
              className="px-4 py-3 rounded-xl"
              style={{ border: '2px solid #90CCDA' }}
              type="password"
              placeholder="비밀번호를 입력해주세요"
            />
            <input
              className="mt-10 px-4 py-3 rounded-xl bg-[#90CCDA] text-white"
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
