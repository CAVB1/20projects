import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';

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
      <LoadMoreData/>


    </div>
  );
}

export default App;
