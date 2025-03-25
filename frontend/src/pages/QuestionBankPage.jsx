import React from "react";
import TabsSection from "../components/QuestionBank/TabsSection";
import FilterBar from "../components/QuestionBank/FilterBar";
import QuestionList from "../components/QuestionBank/QuestionList";

const QuestionBankPage = () => {
  return (
    <div className="bg-[#f9f9f9] p-5 font-[Segoe UI,sans-serif]">
      <TabsSection />
      <FilterBar />
      <QuestionList />
    </div>
  );
};

export default QuestionBankPage;
