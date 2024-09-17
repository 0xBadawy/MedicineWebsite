import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

const VisionSection = () => {
  const [language, setLanguage] = useState("ar");
  const [Text, setText] = useState([
    { ar: "رؤية الكلية", en: "About the College" },
    {
      ar: "تطبيق برامج تعليمية عالية الجودة، ودعم البحث العلمي، وتعزيز الشراكة مع المجتمع، لتخريج طبيب ماهر قادر على مواكبة التطورات المستمرة في مجال الممارسة العملية والبحث العلمي وخدمة البيئة والمجتمع",
    },
    { ar: "إقــرأ الـمــزيـد", en: "Read More" },
  ]);
  return (
    <>
      <div className="bg-[#f7f7f7]">
        <div className=" mx-auto grid grid-cols-2 gap-10 my-20 py-10  container">
          <div className="bg-black h-[400px] ScrollEffectLeft">
            <img
              className="w-full h-full object-cover  transition duration-500 ease-in-out transform hover:scale-105 hover:brightness-"
              src="src/assets/Images/Vision.jpg"
              alt=""
            />
          </div>
          <div className="text-right px-10 py-4 relative ScrollEffectRight">
            <div>
              <h1 className="font-bold text-3xl mb-10 ">{Text[0].ar}</h1>
              <p>{Text[1].ar}</p>
            </div>
            <div className="absolute bottom-9 left-0">
              <button className="border-2 border-[#611112] rounded-md px-5 py-2 font-bold  text-[#611112] flex gap-2 hover:bg-[#611112] hover:text-white">
                <div className="text-xl ">
                  <IoIosArrowBack />
                </div>
                {Text[2].ar}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisionSection;
