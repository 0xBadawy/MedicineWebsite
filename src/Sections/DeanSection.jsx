import React from "react";
import DeanCard from "../MinComponent/DeanCard";

const DeanSection = () => {
  const [dean] = React.useState([
    { id: "1", name: "د.محمد عبد الله عباس", position: "وكيل الكلية لشئون التعليم والطلاب", image: "src/assets/Images/Card/Dean2.jpg" },
    { id: "2", name: "د. محمد شحات", position: " عميد  كلية الطب", image: "src/assets/Images/Card/Dean1.jpg" },
    { id: "3", name: "د.محمد عطيتو", position: "وكيل الكلية لشئون خدمة المجتمع وتنمية البيئة", image: "src/assets/Images/Card/Dean3.jpg" },
  ]);
  return (
    <>
      <div className="my-20">
        <h1 className="mx-auto text-center font-bold text-3xl">{"إدارة الكلية"}</h1>

        <div className="container mx-auto w-[50%] flex gap-4 justify -between ">
          {dean.map((item, index) => {
            return <DeanCard key={index} Data={dean[index]} />;
          })}
        </div>
      </div>
    </>
  );
};

export default DeanSection;
