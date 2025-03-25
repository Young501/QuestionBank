import React, { useState } from "react";
import listeningIcon from "../../assets/listening.png";
import basicIcon from "../../assets/grammar.png";
import readingIcon from "../../assets/reading.png";
import writingIcon from "../../assets/writing.png";

const tabItems = [
  { name: "听力", icon: listeningIcon },
  { name: "基础", icon: basicIcon },
  { name: "阅读", icon: readingIcon },
  { name: "写作", icon: writingIcon },
];

const TabsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative mb-4 overflow-hidden">
      <div className="flex bg-white border-b border-[#eee] relative">
        {tabItems.map((tab, index) => (
          <div
            key={index}
            className={`flex-1 py-3 text-center cursor-pointer text-[16px] font-semibold flex flex-col items-center relative z-10 transition-colors ${
              activeIndex === index ? "text-orange-500" : "text-[#333]"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <img src={tab.icon} alt={tab.name} className="w-6 h-6 mb-1" />
            <span>{tab.name}</span>
          </div>
        ))}
        <div
          className="absolute bottom-0 h-[3px] bg-orange-500 transition-transform duration-300"
          style={{
            transform: `translateX(${activeIndex * 100}%)`,
            width: `${100 / tabItems.length}%`,
          }}
        />
      </div>
    </div>
  );
};

export default TabsSection;
