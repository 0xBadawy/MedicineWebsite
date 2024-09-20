import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const CatHeader = () => {
  const [language, setLanguage] = useState("ar"); // To toggle between Arabic and English
  const [catageory, setCatageory] = useState([
    { ar: "الرئيسية", en: "Home", route: "/" },
    { ar: "عن الكلية", en: "About the College", route: "/about" },
    { ar: "لائحة الكلية", en: "College Regulations", route: "/regulations" },
    { ar: "دليل الطالب", en: "Student Guide", route: "/student-guide" },
    { ar: "احدث الاخبار", en: "Latest News", route: "/news" },
    { ar: "الفاعليات", en: "Events", route: "/events" },
    { ar: "القطاعات", en: "Sectors", route: "/sectors" },
    { ar: "الأقسام العلمية", en: "Scientific Departments", route: "/departments" },
    { ar: "المراكز والوحدات", en: "Centers and Units", route: "/centers-units" },
    { ar: "أعضاء هيئة التدريس", en: "Faculty Members", route: "/faculty-members" },
  ]);

  return (
    <div className="hidden lg:block ">
      <div className="container px-1 mx-auto flex flex-row pt-2 justify-between">
        <div className={`flex  mx-auto ${language === "ar" ? "gap-11 flex-row-reverse" : "gap-6 flex-row"}`}>
          {catageory.map((item, index) => {
            return (
              <div
                className="hover:border-gray-600 hover:cursor-pointer border-b-4 border-white pb-2
              transition duration-100 ease-in transform "
                key={index}
              >
                <Link to={item.route}> {language === "ar" ? item.ar : item.en}</Link>
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
