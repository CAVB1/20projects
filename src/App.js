import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';
import QRCodeGenerator from './components/qr-code-generator';

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      {/* <Accordian/> */}
      {/* Random color component */}
      {/* <RandomColor/> */}

      {/* Star Rating component */}
      {/* <StarRating noOfStars={10}/> */}

      {/* Image Slider component */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={"3"} limit={'9'}/> */}


      {/* Loading more data component */}
      {/* <LoadMoreData/> */}

      {/* Tree view component */}
      {/* <TreeView menus={menus}/> */}

      {/* QR Code Generator component */}
      <QRCodeGenerator/>


    </div>
  );
}

export default App;
