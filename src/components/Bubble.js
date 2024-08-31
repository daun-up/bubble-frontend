import BubbleUI from 'react-bubble-ui';
import 'react-bubble-ui/dist/index.css';
import Child from './Child';
import { useState, useEffect } from 'react';

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

  const [arr, setArr] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let uri = '';
      if (window.location.pathname === '/ReceivedBubbles') {
        uri = 'back/api/post';
      } else if (window.location.pathname === '/RequestedBubbles') {
        uri = 'back/api/post';
      } else if (window.location.pathname === '/MyBubbles') {
        uri = 'back/api/post';
      } else if (window.location.pathname === '/') {
        uri = 'back/api/post';
      }

      try {
        const response = await fetch(uri);
        const data = await response.json();
        setArr(data.data);
      } catch (error) {
        console.error('데이터를 가져오는 중 오류 발생:', error);
      }
    };

    fetchData();
  }, []);

  const children = arr.map((data, i) => {
    return <Child data={data.title} className="child" key={i} />;
  });

  return (
    <BubbleUI options={options} className="w-full max-w-full h-screen bg-white">
      {children}
    </BubbleUI>
  );
}
