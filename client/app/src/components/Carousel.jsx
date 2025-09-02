import { useRef, useState } from "react";
import "../css/Carousel.css";
import Product from "./Product";
import arrowRightImage from "../assets/arrow_right.png";
import arrowLeftImage from "../assets/arrow_left.png";

const Carousel = ({ title, productsList }) => {
  const listRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (scrollOffset) => {
    var newScrollPos = scrollPosition + scrollOffset;

    // check for oob and set scroll position
    const maxScrollWidth =
      listRef.current.scrollWidth - listRef.current.clientWidth;
    if (newScrollPos < 0) {
      listRef.current.scrollLeft = 0;
      newScrollPos = 0;
    } else if (newScrollPos > maxScrollWidth) {
      listRef.current.scrollLeft = maxScrollWidth;
      newScrollPos = maxScrollWidth;
    } else {
      listRef.current.scrollLeft = newScrollPos;
    }
    setScrollPosition(newScrollPos);
  };

  return (
    <>
      <div className="carousel-padding">
        <div className="carousel-title">
          <span>{title}</span>
        </div>
        <div className="carousel-container">
          <button
            className="scroll-button"
            onClick={() => {
              handleScroll(-600);
            }}
          >
            <img src={arrowLeftImage} />
          </button>
          <div className="list-container" ref={listRef}>
            {productsList.map((item) => (
              <div className="list-item" key={item.id}>
                <Product
                  name={item.name}
                  price={item.price}
                  totalReviews={item.totalreviews}
                  rating={item.Rating}
                />
              </div>
            ))}
          </div>
          <button
            className="scroll-button"
            onClick={() => {
              handleScroll(600);
            }}
          >
            <img src={arrowRightImage} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
