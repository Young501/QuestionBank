import React from "react";
import listeningIcon from "../../assets/listening.png";
import basicIcon from "../../assets/grammar.png";
import readingIcon from "../../assets/reading.png";
import writingIcon from "../../assets/writing.png";

const practiceTypes = [
  { name: "听力", count: 4, icon: listeningIcon },
  { name: "基础", count: 5, icon: basicIcon },
  { name: "阅读", count: 4, icon: readingIcon },
  { name: "写作", count: 3, icon: writingIcon },
];

const PracticeSection = () => {
  return (
    <div className="bg-white p-8 rounded-xl w-full shadow-md">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-[5px] h-[18px] bg-[#ff8c00] rounded-sm"></div>
        <h3 className="text-lg font-bold">墨墨刷题（按题型练习）</h3>
      </div>

      <div className="flex justify-between gap-4">
        {practiceTypes.map((item, index) => (
          <div
            key={index}
            className="bg-[#fef6e4] hover:bg-[#fafafa] p-3 text-center rounded-lg w-[22%] flex flex-col items-center cursor-pointer transition-colors duration-300"
          >
            <img src={item.icon} alt={item.name} className="w-10 h-10 mb-2 object-contain" />
            <h4 className="text-base font-semibold mb-1">{item.name}</h4>
            <p className="text-sm text-gray-600 font-medium tracking-wide">
              共{item.count}种题型
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PracticeSection;
