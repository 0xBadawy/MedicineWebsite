import { Link } from "react-router-dom";
import LoadingCardComponent from "./LoadingCardComponent";

const NewsCard = ({ NewsDetails }) => {
  // Check if NewsDetails exist before proceeding
  if (!NewsDetails) {
    return <LoadingCardComponent />;
  }

  // Determine if the news item is new (within the last 7 days)
  const isNew = NewsDetails.attributes?.DateTime && new Date(NewsDetails.attributes.DateTime) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

  // Construct the new badge if applicable
  const newBadge = isNew ? (
    <div className="absolute top-0 bg-primary text-white px-3 py-1 m-2 rounded-lg rounded-tl-lg">
      <span className="text-sm font-semibold">جديد</span>
    </div>
  ) : null;

  // Determine the cover image URL or fallback to a default image
  const Cover = NewsDetails?.attributes?.Cover?.data?.attributes?.formats?.medium?.url || "fallback-image-url.jpg";
  const BaseURL = "http://localhost:1337";

  // Log the NewsDetails to the console for debugging
  console.log("NewsDetails:", NewsDetails.attributes);

  return (
    <div className="mx-auto">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden text-right relative" style={{ direction: "rtl" }}>
        {newBadge}
        <Link to={`/news/${NewsDetails.id}`}>
          <img
            src={BaseURL + Cover}
            alt="news"
            className="w-full h-56 object-cover  transition duration-500 ease-in-out transform hover:scale-110 hover:brightness-50 
            hover:shadow-2xl "
          />
          <div className="p-4">
            <h3 className="font-bold text-lg text-gray-800 truncate">{NewsDetails.attributes.Title}</h3>
            <p className="text-gray-700 text-sm line-clamp-2 mt-2">{NewsDetails.attributes.Description}</p>
          </div>
        </Link>

        <div className="p-4 mt-2">
          <div className="text-left">
            <Link to={`/news/${NewsDetails.id}`} className="text-indigo-600 inline-block hover:text-indigo-800">
              اقرأ المزيد
            </Link>
          </div>
          <hr className="my-2" />

          <div className="flex items-center justify-between">
            <img className="w-10 h-10 object-cover object-center rounded-full" src="src/assets/Images/Logo/LogoMain.png" alt="avatar" />
            <div className="ml-3 flex flex-row-reverse text-2xl items-center gap-3">
              {/* date */}
              <p className="text-gray-800 text-[14px] font-sans font-bold    ">
                {new Date(NewsDetails.attributes.DateTime).toLocaleString("en-EG", {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
