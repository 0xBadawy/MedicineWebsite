import { useEffect, useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaShare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import NewsImages from "../MinComponent/NewsImages";
import api from "../Config/API/api";
import { useParams } from "react-router-dom";
import HeaderCover from "../assets/Images/Cover/NewsCover.png";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm"; // Optional: for GitHub Flavored Markdown support

const NewsDetails = () => {
  const { id } = useParams();
  const [socialMedia] = useState([
    { name: "Share", link: "https://www.facebook.com/sharer/sharer.php?u=", icon: <FaShare size={19} /> },
    { name: "Facebook", link: "https://www.facebook.com/sharer/sharer.php?u=", icon: <FaFacebookF size={18} /> },
    { name: "Twitter", link: "https://twitter.com/intent/tweet?url=", icon: <BsTwitterX size={18} /> },
    { name: "LinkedIn", link: "https://www.linkedin.com/sharing/share-offsite/?url=", icon: <FaLinkedinIn size={18} /> },
  ]);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/posts/${id}`);
        setData(response.data.data.attributes); // Use the correct response structure
        console.log(response.data.data.attributes);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]); // Add id as a dependency

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {error.message}</div>;

  return (
    <>
      <div>
        <div
          style={{ backgroundImage: `url(${"http://localhost:1337" + data.Cover.data.attributes.url})` }}
          className="bg-cover bg-center h-fit flex items-center justify-center bg-gray-200"
        >
          <div className="bg-gradient-to-r from-[#3a1616dd] to-[#3a1616dd] w-full h-full">
            <div className="py-10 mx-2 lg:mx-32 container m-auto" style={{ direction: "rtl" }}>
              <div className="flex flex-row gap-10 items-start text-[30px] font-bold text-white text-right mx-auto ">
                <span className="flex flex-col items-center border-l-2 pl-10">
                  <span className="text-6xl">
                    {new Date(data.DateTime).toLocaleString("en-eg", {
                      day: "numeric",
                    })}
                  </span>
                  <span className="text-xl">
                    {new Date(data.DateTime).toLocaleString("ar-eg", {
                      month: "long",
                    })}
                  </span>
                </span>
                {/* Display the title from data if available */}
                <span className="flex flex-col gap-3">
                  <span>{data.Title}</span>
                  <span className="text-sm font-normal max-w-[80ch] truncate ">{data.Description}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto py-10 text-right">
          <div className="max-w- text-3xl font-semibold leading-normal text-gray-900 dark:text-white flex flex-row-reverse items-center justify-between">
            <div className="text-gray-500 font-normal dark:text-gray-400 text-sm flex flex-row-reverse items-center text-left">
              <div className="flex flex-row-reverse items-center">
                <span>: تم النشر بواسطة </span>
                <span className="font-bold text-gray-600">{" جامعة الأقصر "}</span>
                <div className="w-2 h-2 bg-slate-400 rounded-full mx-3"></div>
              </div>
              <span className="flex flex-row-reverse items-center text-gray-500 font-normal text-l">
                {new Date(data.DateTime).toLocaleString("ar-eg", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            <div className="flex">
              {socialMedia.map((item, index) => (
                <a
                  key={index}
                  href={`${item.link}${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 p-2 rounded-full hover:text-gray-700"
                  title={`Share on ${item.name}`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <h1 className="max-w- text-3xl font-semibold leading-normal my-10 text-gray-900 dark:text-white">{data.Title}</h1>

          <div className="my-16">
            <NewsImages Data={data.Gallery} />
          </div>

          <div className="text-right text-gray-500 dark:text-gray-400" style={{ direction: "rtl" }}>
            <ReactMarkdown>{data.Description}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetails;
