import { useEffect, useState } from "react";
import HeaderCover from "../assets/Images/Cover/NewsCover.png";
import FooterLogo from "../assets/Images/Logo/LogoBlack.png";
import api from "../Config/API/api";
import NewsCard from "../MinComponent/NewsCard";

const News = () => {
  const [news, setNews] = useState(["", "", "", "", "", "", "", "", "", "", "", ""]);
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
      <div>
        <div style={{ backgroundImage: `url(${HeaderCover})` }} className="bg-cover bg-center h-fit flex items-center justify-center bg-gray-200">
          <div className="bg-gradient-to-r from-[#3a1616dd] to-[#3a1616dd] w-full h-full">
            <div className="py-10 mx-2 lg:mx-32 container m-auto" style={{ direction: "rtl" }}>
              <div className="flex flex-row gap-10 mx-auto   items-start text-[30px] font-bold text-white text-right">
                <span className="flex flex-col items-center border-l-2 pl-10">
                  <img className="w-28" src={FooterLogo} alt="" />
                </span>
                {/* Display the title from data if available */}
                <span className="flex flex-col gap-3 items-start text-center">
                  <span className="text-5xl text-center">آخـــر الأخــبــار</span>
                  <span className="text-sm font-normal mt-5 max-w-[80ch] truncate ">كل ما تحتاج معرفته عن أحدث الأحداث والمستجدات في كلية الطب بجامعة الأقصر</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto  text-right">
          {/* <h1 className="max-w- text-3xl text-center font-semibold leading-normal my-10 text-gray-900 dark:text-white">{"كلية الطب جامعة الأقصر"}</h1> */}
          <div className="text-right px-20 text-gray-500 dark:text-gray-400 pb-20" style={{ direction: "rtl" }}>
            <div className="grid grid-cols-4 gap-2 mt-10 " style={{ direction: "rtl" }}>
              {news.map((item, index) => {
                return (
                  <div key={index} className="ScrollEffectApper">
                    <NewsCard ID={index} NewsDetails={item} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
