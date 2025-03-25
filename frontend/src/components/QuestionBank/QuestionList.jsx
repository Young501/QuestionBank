import React from "react";

const sampleQuestions = [
  {
    id: 1,
    title: "2024年浦东新区听力对话判断题号6",
    topic: "听力-地点",
    isNew: true,
    difficulty: "一般",
    done: 1,
    isCollected: true,
  },
  {
    id: 2,
    title: "2024年浦东新区听力对话判断题号7",
    topic: "听力-计算",
    isNew: true,
    difficulty: "简单",
    done: 0,
    isCollected: false,
  },
  {
    id: 3,
    title: "2024年浦东新区听力对话判断题号8",
    topic: "听力-关系",
    isNew: true,
    difficulty: "一般",
    done: 0,
    isCollected: false,
  },
];

const QuestionList = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex flex-col">
        {sampleQuestions.map((q, index) => (
          <div
            key={q.id}
            className={`flex justify-between items-center py-3 ${
              index !== sampleQuestions.length - 1 ? "border-b border-[#eee]" : ""
            }`}
          >
            {/* 左侧 */}
            <div className="flex items-center gap-2 flex-wrap text-sm text-[#222]">
              <span className="font-bold text-[#333] w-5">{index + 1}</span>
              <span className="font-medium">{q.title}</span>
              <span className="text-[#888] text-xs">{q.topic}</span>
              {q.isNew && (
                <span className="bg-[#ffefc2] text-orange-500 text-xs rounded-full px-2 py-[2px]">
                  新题
                </span>
              )}
            </div>

            {/* 右侧 */}
            <div className="flex items-center gap-2 text-xs flex-shrink-0">
              <span
                className={`rounded-full px-2 py-[2px] font-medium ${
                  q.difficulty === "困难"
                    ? "bg-[#fdecea] text-[#e74c3c]"
                    : q.difficulty === "一般"
                    ? "bg-[#fef0e3] text-[#e67e22]"
                    : "bg-[#e3f9e5] text-[#27ae60]"
                }`}
              >
                {q.difficulty}
              </span>
              <span className="bg-[#f5f5f5] text-[#555] rounded-full px-2 py-[2px]">
                已练({q.done})
              </span>
              <span
                className="w-6 h-6 rounded-full text-white text-sm font-bold text-center leading-6 cursor-pointer"
                style={{ backgroundColor: "#ff8c00" }}
              >
                {q.isCollected ? "－" : "＋"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionList;
