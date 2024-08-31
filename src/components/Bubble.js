// myComponent.js
import BubbleUI from 'react-bubble-ui';
import 'react-bubble-ui/dist/index.css';
import Child from './Child';
import { useState, useEffect } from 'react';
// import axios from 'axios';

export default function Bubble(props) {
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

  const [arr, setArr] = useState([
    '소디패 후기',
    '교환학생 후기',
    '제목3',
    'sadass',
    '제목5',
    '소디패 후기',
    '교환학생 후기',
    '제목3',
    '',
    '제목5',
  ]);

  useEffect(() => {
    const fetchData = async () => {
      // let uri = '';
      // if (window.location.pathname === '/ReceivedBubbles') {
      //   uri = 'back/api/get1';
      // } else if (window.location.pathname === '/RequestedBubbles') {
      //   uri = 'back/api/get2';
      // } else if (window.location.pathname === '/MyBubbles') {
      //   uri = 'back/api/get3';
      // }
      // try {
      //   const response = await axios.get(uri);
      //   const data = await response.data;
      //   setArr(data);
      // } catch (error) {
      //   console.error('데이터를 가져오는 중 오류 발생:', error);
      // }
      setArr([
        '소디패 후기',
        '교환학생 후기',
        '제목3',
        'sadass',
        '제목5',
        '소디패 후기',
        '교환학생 후기',
        '제목3',
        '',
        '제목5',
        '소디패 후기',
        '교환학생 후기',
        '제목3',
        'sadass',
        '제목5',
        '소디패 후기',
        '교환학생 후기',
        '제목3',
        '',
        '제목5',
        '소디패 후기',
        '교환학생 후기',
        '제목3',
        'sadass',
        '제목5',
        '소디패 후기',
        '교환학생 후기',
        '제목3',
        '',
        '제목5',
      ]);
    };

    fetchData();
  }, []);

  const children = arr.map((data, i) => {
    return <Child data={data} className="child" key={i} />; // Self-closing tag로 수정
  });

  return (
    <BubbleUI options={options} className="w-full max-w-full h-screen bg-white">
      {children}
    </BubbleUI>
  );
}
