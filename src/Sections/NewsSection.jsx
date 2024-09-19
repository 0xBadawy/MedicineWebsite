import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import NewsCard from "./../MinComponent/NewsCard";
import api from "../Config/API/api";

const NewsSection = () => {
  const [news, setNews] = useState(["", "", "", "", "", "", "", ""]);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get("/posts")
      .then((response) => {
        setNews(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-center font-bold text-3xl">اخـر الاخــبــار</h1>
        <div className="grid grid-cols-4 gap-2 mt-10 " style={{direction:"rtl"}}>
          {news.map((item, index) => {
            return (
              <div key={index} className="ScrollEffectApper">
                <NewsCard ID={index} NewsDetails={item} />
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
    </>
  );
};

export default NewsSection;
