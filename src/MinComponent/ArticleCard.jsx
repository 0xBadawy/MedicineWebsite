import React from "react";
import { FcOvertime } from "react-icons/fc";
import news from "../Data/News.json";
const ArticleCard = ({ ID }) => {
  return (
    <>
      <div>
        <div className="bg-white h-[220px] shadow-lg rounded-lg overflow-hidden text-right flex relative" style={{ direction: "rtl" }}>
          <img
            src={news.Article[ID].image}
            alt="news"
            className="h-full w-[40%] object-cover object-center transition duration-500 ease-in-out transform hover:scale-110 hover:brightness-50 
            hover:shadow-2xl "
          />

          <div className="px-6 py-4">
            <h1 className="font-bold text-l mb-4 text-gray-800 truncate" style={{ direction: "rtl" }}>
              {news.Article[ID].title}
            </h1>
            <p className="text-gray-700 text-sm line-clamp-4">{news.Article[ID].content}</p>

            <div className="mt-4">
              {/* <div className="text-left">
                <a href="#" className="text-indigo-600 inline-block  hover:text-indigo-800">
                  اقرأ المزيد
                </a>
              </div> */}
              <hr className="mt-8 mb-1" />

              <div className="flex items-center  justify-between">
                <div className="flex items-center gap-2">
                  <img
                    className="w-10 h-10 object-cover object-center rounded-full             
                  "
                    src={news.Article[ID].avatar}
                    alt="avatar"
                  />
                  <div className="flex flex-col">
                    <p className="font-bold text-sm ">{news.Article[ID].author}</p>
                    <p className="font- text-[12px] text-[#6e6969]">{news.Article[ID].department}</p>
                  </div>
                </div>
                <div className="flex flex-col  text-2xl items-start ml-0 mb-[-13px]">
                  {/* date */}

                  <p className="text-gray-800 text-[14px] font-sans font-bold     ">{news.Article[ID].date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
