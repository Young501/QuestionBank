import React from "react";
import studyIcon from "../../assets/book.png";

const StudyData = () => {
  return (
    <div className="bg-gradient-to-b from-white to-[#fdf2e9] rounded-xl p-8 min-h-[180px] shadow-md w-full flex flex-col items-center">
      <div className="w-full flex justify-between items-center pb-2 border-b-2 border-[#ff8c00]">
        <div className="flex items-center gap-2 text-[#ff8c00] font-bold text-lg">
          <img src={studyIcon} alt="学习数据" className="w-5 h-5" />
          <span>学习数据</span>
        </div>
        <span className="text-sm text-gray-500">2514 人在努力</span>
      </div>

      <div className="flex justify-between w-full my-5">
        {["今日练习次数", "累计练习次数", "累计练习天数"].map((label, i) => (
          <div key={i} className="text-center flex-1">
            <h2 className="text-2xl text-[#ff8c00] mb-1">0</h2>
            <p className="text-sm text-gray-600">{label}</p>
          </div>
        ))}
      </div>

      <button className="bg-[#ff8c00] hover:bg-[#ff6f00] text-white font-bold py-2 px-4 rounded transition-colors duration-300">
        进入学习中心
      </button>
    </div>
  );
};

export default StudyData;
