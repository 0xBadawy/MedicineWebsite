import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import ArticleCard from "../MinComponent/ArticleCard";

const ArticleSection = () => {
  const [news, setNews] = useState(["", "", "", ""]);

  
  return (
    <>
      <div className="bg-[#f7f7f7] my-10 py-10">
        <div className="container mx-auto">
          <h1 className="text-center font-bold text-3xl">المقالات العملية </h1>
          <div className="grid grid-cols-2 gap-10 mt-10 ">
            {news.map((item, index) => {
              return (
                <div key={index} className="ScrollEffectApper">
                  <ArticleCard ID={index} />
                </div>
              );
            })}
          </div>

          <div className="flex justify-center mt-10">
            <button className="border-2 border-[#611112] rounded-md px-5 py-2 font-bold  text-[#611112] flex gap-2 hover:bg-[#611112] hover:text-white">
              <div className="text-xl ">
                <IoIosArrowBack />
              </div>
              {"المزيد"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleSection;
