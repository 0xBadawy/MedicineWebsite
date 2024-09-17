import React from "react";

const NewsImages = () => {
  const images = ["src/assets/Images/News/NewsImage (2).jpg", "src/assets/Images/News/NewsImage (3).jpg", "src/assets/Images/News/NewsImage (4).jpg"];
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => {
            console.log(spans[index]);

            return (
              <div key={index} className={`relative rounded-xl ${spans[index]}`}>
                <img src={image} alt="" className="w-full h-[300px] object-cover rounded-xl shadow-md shadow-gray-700" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NewsImages;
