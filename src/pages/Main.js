import Bubble from '../components/Bubble';
import GNB from '../components/GNB';
const Main = () => {
  return (
    <div
      className="w-full h-full relative bg-black "
      style={{ backgroundColor: 'black' }}
    >
      <div className="absolute top-0 right-0">
        <GNB></GNB>
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <Bubble></Bubble>
      </div>
    </div>
  );
};
export default Main;
