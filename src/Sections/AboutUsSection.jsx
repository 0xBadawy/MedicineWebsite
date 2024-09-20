import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import "../Style/Anmation.css";
import { Link } from "react-router-dom";

const AboutUsSection = () => {
  const [language, setLanguage] = useState("ar");
  const [Text, setText] = useState([
    { ar: "عن الكلية", en: "About the College" },
    {
      ar: "تهدف الكلية إلى تنمية قدرات الطالب من خلال تطبيق مبدأ التعلم الذاتي ليصبح قادرًا على التعلم المستمر والعمل في نظام صحي متكامل، مع التركيز على حل المشكلات الطبية وتنمية المهارات المهنية والإكلينيكية الأساسية منذ بداية الدراسة من خلال الدراسة التكاملية للجسم البشري. رسالة الكلية تتمثل في تخريج أطباء حاصلين على شهادات علمية معتمدة دوليًا تمكنهم من العمل أو استكمال الدراسة في جميع المراكز العلمية والدولية. كما تسعى الكلية إلى تأهيل الطلاب أكاديميًا وإكلينيكيًا وفقًا للمعايير الدولية لتمكينهم من المنافسة في سوق العمل الإقليمي والدولي، مع تعزيز قدرتهم على التعلم الذاتي المستمر عبر تطبيق أحدث الممارسات في التعليم الطبي. رؤية الكلية تركز على تطبيق برامج تعليمية عالية الجودة، دعم البحث العلمي، وتعزيز الشراكة مع المجتمع، وذلك لتخريج طبيب ماهر قادر على مواكبة التطورات في الممارسة العملية والبحث العلمي، مع خدمة البيئة والمجتمع.",
    },
    { ar: "إقــرأ الـمــزيـد", en: "Read More" },
  ]);
  return (
    <>
      <div className="bg-[#f7f7f7] ">
        <div className=" mx-auto grid grid-cols-2 gap-10 my-20 py-10  container">
          <div className=" h-[400px] ScrollEffectLeft">
            <img
              className="w-full h-full object-cover rounded- transition duration-500 ease-in-out transform hover:scale-105 hover:brightness-"
              src="src/assets/Images/About.jpg"
              alt=""
            />
          </div>
          <div className="text-right px-10 py-4 relative  ScrollEffectRight">
            <div>
              <h1 className="font-bold text-3xl mb-10 fadeIn">{Text[0].ar}</h1>
              <p>{Text[1].ar}</p>
            </div>
            <div className="absolute bottom-0 left-0">
              <Link to={"/about"} className="border-2 border-[#611112] rounded-md px-5 py-2 font-bold  text-[#611112] flex gap-2 hover:bg-[#611112] hover:text-white">
                <div className="text-xl ">
                  <IoIosArrowBack />
                </div>
                {Text[2].ar}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsSection;
