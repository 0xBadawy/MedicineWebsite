import React from "react";
import img1 from "../assets/Images/News/NewsImage (2).jpg";
import img2 from "../assets/Images/News/NewsImage (3).jpg";
import img3 from "../assets/Images/News/NewsImage (4).jpg";
import { useParams } from "react-router-dom";

const NewsImages = () => {
  const images = [img1, img2, img3];
  const { id } = useParams();
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
  // Helper function to return a random column span (from 1 to 4)
  console.log(spans);

  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => {
            console.log(spans[index]);

            return (
              <div key={index} className={`relative rounded-xl ${spans[index]}`}>
                <img
                  src={image}
                  alt=""
                  className="w-full h-[300px] object-cover rounded-xl shadow-md sh adow-gray-500
                transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:-z-50 
                "
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NewsImages;
