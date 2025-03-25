import React, { useState, useEffect } from "react";
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";

const images = [banner1, banner2, banner3];

const BannerSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[500px] flex items-center justify-center relative">
      <div className="w-full h-full overflow-hidden relative rounded-[10px]">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover rounded-[10px] transition-opacity duration-500 ease-in-out"
        />
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-[10px]">
          {images.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-[12px] h-[12px] rounded-full cursor-pointer transition-colors duration-300 ${
                currentIndex === index ? "bg-[#ff8c00]" : "bg-white/60"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
