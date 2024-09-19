/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const NewsCard = ({ NewsDetails }) => {
  const newBadge =
    NewsDetails && NewsDetails.attributes && NewsDetails.attributes.DateTime && new Date(NewsDetails.attributes.DateTime) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) ? (
      <div className="absolute top-0 bg-primary text-white px-3 py-1 m-2 rounded-lg rounded-tl-lg">
        <span className="text-sm font-semibold">جديد</span>
      </div>
    ) : null;

  console.log("NewsDetails");
  console.log(NewsDetails.attributes);

  const Cover = NewsDetails?.attributes?.Cover?.data?.attributes?.formats?.medium?.url || "fallback-image-url.jpg";
  const BaseURL = "http://localhost:1337";
  if (!NewsDetails) {
    return <div>Loading news...</div>;
  }

  return (
    <>
      <div className="mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden text-right relative " style={{ direction: "rtl" }}>
          <img
            src={BaseURL + Cover}
            alt="news"
            className="w-full h-56 object-cover object-center transition duration-500 ease-in-out transform hover:scale-110 hover:brightness-50 "
          />

          {newBadge}
          <div className="px-6 py-4">
            <h1 className="font-bold text-l text-gray-800 truncate" style={{ direction: "rtl" }}>
              {NewsDetails.attributes.Title}
            </h1>
            <p className="text-gray-700 text-sm line-clamp-2">{NewsDetails.attributes.Description}</p>

            <div className="mt-4">
              <div className="text-left">
               <Link to={`/news/${NewsDetails.id}`} className="text-indigo-600 inline-block  hover:text-indigo-800">
                  اقرأ المزيد
                </Link> 

              </div>
              <hr className="my-2" />

              <div className="flex items-center  justify-between">
                <img className="w-10 h-10 object-cover object-center rounded-full" src="src/assets/Images/Logo/LogoMain.png" alt="avatar" />
                <div className="ml-3 flex flex-row-reverse text-2xl items-center gap-3">
                  {/* date */}
                  <p className="text-gray-800 text-[18px] font-mono">
                    {new Date(NewsDetails.attributes.DateTime).toLocaleString("en-eg", {
                      year: "numeric",
                      month: "numeric",
                      day: "numeric",
                    })}
                  </p>{" "}
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
