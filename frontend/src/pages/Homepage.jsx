import React from "react";
import HeaderSection from "../components/HomePage/HeaderSection";
import BannerSection from "../components/HomePage/BannerSection";
import StudyData from "../components/HomePage/StudyData";
import PracticeSection from "../components/HomePage/PracticeSection";

const HomePage = () => {
  return (
    <div className="w-full bg-[#f5f5f5]">
      <HeaderSection />

      {/* Banner + 右侧部分 */}
      <div className="flex justify-between items-stretch px-6 gap-5 mt-[15px] mb-[15px]">
        {/* 左侧 Banner 占 60% */}
        <div className="flex-[3] flex flex-col justify-center">
          <BannerSection />
        </div>

        {/* 右侧部分：改为两行 grid，自适应高度 */}
        <div className="flex-[2] grid grid-rows-2 gap-2.5 pr-10 ">
          <div className="h-full">
            <StudyData />
          </div>
          <div className="h-full flex items-end">
            <PracticeSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
