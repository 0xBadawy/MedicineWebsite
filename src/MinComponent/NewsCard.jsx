import React from "react";
import news from "../Data/News.json";
import { FcOvertime } from "react-icons/fc";

const NewsCard = ({ ID }) => {
  const newBadge =
    news.news[ID].id == 4 || news.news[ID].id == 3 ? (
      <div className="absolute top-0 bg-primary text-white px-3 py-1 m-2 rounded-lg rounded-tl-lg">
        <span className="text-sm font-semibold">جديد</span>
      </div>
    ) : null;

  return (
    <>
      <div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden text-right relative" style={{ direction: "rtl" }}>
          <img
            src={news.news[ID].image}
            alt="news"
            className="w-full h-56 object-cover object-center transition duration-500 ease-in-out transform hover:scale-110 hover:brightness-50 "
          />

          {newBadge}
          <div className="px-6 py-4">
            <h1 className="font-bold text-l text-gray-800 truncate" style={{ direction: "rtl" }}>
              {news.news[ID].title}
            </h1>
            <p className="text-gray-700 text-sm line-clamp-2">{news.news[ID].content}</p>

            <div className="mt-4">
              <div className="text-left">
                <a href="#" className="text-indigo-600 inline-block  hover:text-indigo-800">
                  اقرأ المزيد
                </a>
              </div>
              <hr className="my-2" />

              <div className="flex items-center  justify-between">
                <img className="w-10 h-10 object-cover object-center rounded-full" src="src/assets/Images/Logo/LogoMain.png" alt="avatar" />
                <div className="ml-3 flex flex-row-reverse text-2xl items-center gap-3">
                  {/* date */}
                  <FcOvertime />

                  <p className="text-gray-800 text-[18px] font-mono">{news.news[ID].date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
