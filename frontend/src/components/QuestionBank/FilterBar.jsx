import React, { useState } from "react";

const tabList = ["图片选择", "对话判断", "正错判断", "听短文填词"];

const FilterBar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [filters, setFilters] = useState({
    sort: "最新添加",
    practice: "",
    favorite: "",
    difficulty: "",
  });

  const handleFilterClick = (group, value) => {
    setFilters(prev => ({
      ...prev,
      [group]: prev[group] === value ? "" : value,
    }));
  };

  const total = 8806;

  const FilterGroup = ({ label, groupKey, options }) => (
    <div className="flex flex-wrap items-center gap-2 mb-2">
      <span className="font-bold text-[#444] mr-2">{label}</span>
      {options.map(item => (
        <button
          key={item}
          onClick={() => handleFilterClick(groupKey, item)}
          className={`px-3 py-[6px] text-sm border rounded-full transition ${
            filters[groupKey] === item
              ? "bg-orange-500 text-white border-orange-500"
              : "bg-[#f8f8f8] text-[#333] border border-[#ddd] hover:bg-[#fff0e0] hover:text-orange-500 hover:border-orange-500"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );

  return (
    <div className="bg-white p-4 rounded-xl shadow mb-5">
      {/* Tab 切换 */}
      <div className="relative flex border-b border-[#eee] mb-4">
        {tabList.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex-1 text-center py-2 text-[15px] transition relative z-10 ${
              activeTab === index ? "text-orange-500 font-bold" : "text-[#333]"
            }`}
          >
            {tab}
          </button>
        ))}
        <div
          className="absolute bottom-0 h-[3px] bg-orange-500 transition-transform duration-300 z-0"
          style={{
            transform: `translateX(${activeTab * 100}%)`,
            width: `${100 / tabList.length}%`,
          }}
        />
      </div>

      {/* 筛选组 */}
      <FilterGroup label="排序" groupKey="sort" options={["最新添加", "考察点", "年份", "难度"]} />
      <FilterGroup label="练习" groupKey="practice" options={["已练习", "未练习"]} />
      <FilterGroup label="收藏" groupKey="favorite" options={["已收藏", "未收藏"]} />

      <div className="flex justify-between items-center flex-wrap">
        <FilterGroup
          label="难度"
          groupKey="difficulty"
          options={["简单（追求及格）", "一般（120）", "困难（140）"]}
        />
        <div className="text-sm text-[#666] mt-2">
          共 <span className="text-orange-500 font-bold">{total}</span> 个筛选结果
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
