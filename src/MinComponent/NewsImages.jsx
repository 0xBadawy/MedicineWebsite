import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NewsImages = ({ Data }) => {
  const [images, setImages] = useState([]);
  const spans = [];

  const SpanSize = (sz) => {
    if (sz === 1) return spans.push("col-span-4");
    if (sz === 2) return spans.push("col-span-2", "col-span-2");
    if (sz === 3) return spans.push("col-span-1", "col-span-2", "col-span-1");
    if (sz === 4) return spans.push("col-span-2", "col-span-2", "col-span-2", "col-span-2");
    if (sz === 5) return spans.push("col-span-1", "col-span-2", "col-span-1", "col-span-2", "col-span-2");
    if (sz === 6) return spans.push("col-span-1", "col-span-2", "col-span-1", "col-span-2");
    if (sz === 7) return spans.push("col-span-1", "col-span-2", "col-span-1", "col-span-1", "col-span-1");
    if (sz === 8) return spans.push("col-span-1");
  };
  SpanSize(images.length);

  useEffect(() => {
    const BaseURL = "http://localhost:1337";
    const newImages = [];

    if (Data?.data) {
      for (let i = 0; i < Data.data.length; i++) {
        const imageUrl = Data.data[i]?.attributes?.url;
        if (imageUrl) {
          newImages.push(BaseURL + imageUrl);
        }
      }
    }

    setImages(newImages);
    SpanSize(newImages.length);
  }, [Data]);

  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div key={index} className={`relative rounded-xl ${spans[index]}`}>
            <img src={image} alt="" className="w-full h-[300px] object-cover rounded-xl shadow-md transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsImages;
