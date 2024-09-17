import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

const CatHeader = () => {
  const [language, setLanguage] = useState("ar"); // To toggle between Arabic and English
  const [catageory, setCatageory] = useState([
    { ar: "الرئيسية", en: "Home" },
    { ar: "عن الكلية", en: "About the College" },
    { ar: "لائحة الكلية", en: "College Regulations" },
    { ar: "دليل الطالب", en: "Student Guide" },
    { ar: "احدث الاخبار", en: "Latest News" },
    { ar: "الفاعليات", en: "Events" },
    { ar: "القطاعات", en: "Sectors" },
    { ar: "الأقسام العلمية", en: "Scientific Departments" },
    { ar: "المراكز والوحدات", en: "Centers and Units" },
    { ar: "أعضاء هيئة التدريس", en: "Faculty Members" },
  ]);

  return (
    <div className="hidden lg:block ">
      <div className="container px-1 mx-auto flex flex-row pt-2 justify-between">
        <div className={`flex  mx-auto ${language === "ar" ? "gap-11 flex-row-reverse" : "gap-6 flex-row"}`}>
          {catageory.map((item, index) => {
            return (
              <div className="hover:border-gray-600 hover:cursor-pointer border-b-4 border-white pb-2" key={index}>
                {language === "ar" ? item.ar : item.en}
              </div>
            );
          })}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CatHeader;
