import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './styles.css';


export default function StarRating({noOfStars}) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex) {
        console.log(getCurrentIndex);
        setRating(getCurrentIndex);
    }

    function handleMouseEnter(getCurrentIndex) {
        console.log(getCurrentIndex);
        setHover(getCurrentIndex);
    }

    function handleMouseLeave(getCurrentIndex) {
        console.log(getCurrentIndex);
        setHover(rating);
    }

    return (
        <div className="star-rating">
          {
            [...Array(noOfStars)].map((_, index) => {
              return (
                <FaStar
                  key={index + 1} // Add 1 to the index to avoid key duplication
                  className={index+1 <= (hover||rating) ? 'active' : 'inactive'}
                  onClick={() => handleClick(index + 1)} // Adjust the index for correct handling
                  onMouseMove={() => handleMouseEnter(index + 1)} // Adjust the index for correct handling
                  onMouseLeave={() => handleMouseLeave(index + 1)} // Adjust the index for correct handling
                  size={40}
                />
              );
            })
          }
        </div>
      );
}