// myComponent.js
import BubbleUI from 'react-bubble-ui';
import 'react-bubble-ui/dist/index.css';
import Child from './Child';
// import './myComponent.css';
import { useState } from 'react';
export default function Bubble(props) {
  const options = {
    size: 180,
    minSize: 20,
    gutter: 33,
    provideProps: true,
    numCols: 6,
    fringeWidth: 98,
    yRadius: 130,
    xRadius: 220,
    cornerRadius: 50,
    showGuides: false,
    compact: true,
    gravitation: 4,
  };

  const [arr] = useState(['제목1', '제목2', '제목3', '제목4', '제목5']);

  const children = arr.map((data, i) => {
    return <Child data={data} className="child" key={i} />; // Self-closing tag로 수정
  });

  return (
    <BubbleUI options={options} className="myBubbleUI">
      {children}
    </BubbleUI>
  );
}
