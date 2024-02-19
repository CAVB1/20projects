import { useEffect, useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircleFill, BsArrowLeftCircleFill } from 'react-icons/bs';
import './styles.css';


export default function ImageSlider({ url, limit = 5, page = 1 }) {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages(getUrl) {
        try {
            setLoading(true);

            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if (data) {
                setImages(data);
                setLoading(false);
            }
        } catch (e) {
            setErrorMsg(e.message);
            setLoading(false);
        }
    }

    // Functión to step to the previous image
    function handlePrevious() {
        setCurrentSlide(currentSlide === "0" ? images.length - 1 : currentSlide - 1);
    }


    // Functión to step to the next image
    function handleNext() {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    }


    useEffect(() => {
        if (url !== "") fetchImages(url);
    }, [url,]);


    console.log(images);

    if (loading) {
        return <div>Loading data ! Wait a minute</div>
    }

    if (errorMsg !== null) {
        return <div>Error ocurred ! {errorMsg}</div>
    }

    return <div className="container">
        <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left" />
        {
            images && images.length ?
                images.map((imageItem, index) => (
                    <img
                        key={imageItem.id}
                        src={imageItem.download_url}
                        alt={imageItem.download_url}
                        // If the current slide isn't equals to the index of img it will be hiden
                        className={currentSlide === index ? "current-image" : "current-image hide-current-image"}
                    />
                ))
                : null
        }

        <BsArrowRightCircleFill onClick={handleNext}
            className="arrow arrow-right" />
        <span className="circle-indicators">
            {
                images && images.length ?
                    images.map((_, index) => <button key={index}
                        className={currentSlide === index ? "current-indicator" : "current-indicator inactive-indicator"}
                        onClick={() => setCurrentSlide(index)}
                    >

                    </button>)
                    : null
            }
        </span>

    </div>
}