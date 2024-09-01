import BubbleUI from 'react-bubble-ui';
import 'react-bubble-ui/dist/index.css';
import Child from './Child';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 임포트

export default function Bubble(props) {
  const userId = sessionStorage.getItem('userId');
  const authToken = sessionStorage.getItem('authToken'); // 인증 토큰 가져오기

  const options = {
    size: 180,
    minSize: 20,
    gutter: 33,
    provideProps: true,
    numCols: 6,
    fringeWidth: 180,
    yRadius: 180,
    xRadius: 280,
    cornerRadius: 150,
    showGuides: false,
    compact: true,
    gravitation: 8,
  };

  const [arr, setArr] = useState([]);
  const navigate = useNavigate(); // useNavigate 훅 초기화

  useEffect(() => {
    const fetchData = async () => {
      let uri = '';
      if (window.location.pathname === '/received-bubbles') {
        uri = `back/api/contract/receive/${userId}`;
      } else if (window.location.pathname === '/requested-bubbles') {
        uri = `back/api/contract/request/${userId}`;
      } else if (window.location.pathname === '/my-bubbles') {
        uri = `back/api/post/${userId}/users`;
      } else if (window.location.pathname === '/') {
        uri = 'back/api/post';
      }

      try {
        const response = await fetch(uri, {
          method: 'GET', // GET 요청
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`, // Authorization 헤더 추가
          },
        });
        const data = await response.json();

        // Ensure data.data is an array
        if (Array.isArray(data.data)) {
          console.log(data.data);
          setArr(data.data);
        } else {
          console.warn('Expected an array but got:', data.data);
          setArr([]); // Set to empty array if data is not as expected
        }
      } catch (error) {
        console.error('데이터를 가져오는 중 오류 발생:', error);
      }
    };

    fetchData();
  }, [userId]); // userId를 의존성 배열에 추가

  const handleBubbleClick = id => {
    navigate(`/bubble/${id}`); // 클릭된 버블의 id를 포함하여 상세 페이지로 이동
  };

  const children = arr.map((data, i) => {
    return (
      <Child
        data={data.title}
        id={data.id} // id 전달
        key={i}
        onClick={() => handleBubbleClick(data.id)} // 클릭 이벤트 처리
      />
    );
  });

  return (
    <BubbleUI options={options} className="w-full max-w-full h-screen bg-white">
      {children}
    </BubbleUI>
  );
}
