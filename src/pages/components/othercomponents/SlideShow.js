import React, { useState, useEffect } from "react";
import srv1 from "../../assets/slideshow/services2.jpg";
import srv2 from "../../assets/slideshow/services3.jpg";
import srv3 from "../../assets/slideshow/services4.jpg";
import srv4 from "../../assets/slideshow/services5.jpg";
const imageUrls = [srv1, srv2, srv3, srv4];
const SlideShow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Automatically loop through images
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 3000); // Change images every 3 seconds (adjust as needed)

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  return (
    <div className="relative max-w-full overflow-hidden">
      <img
        className="w-full transition-transform transform ease-in-out duration-500"
        src={imageUrls[currentIndex]}
        alt=""
      />

      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-l-md"
      >
        -
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-r-md"
      >
        -
      </button>
    </div>
  );
};

export default SlideShow;
