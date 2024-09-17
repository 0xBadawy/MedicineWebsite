import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

const MessageSection = () => {
  const [language, setLanguage] = useState("ar");
  const [Text, setText] = useState([
    { ar: "رسالة الكلية", en: "About the College" },
    {
      ar: "تخريج أطباء حاصلين على شهادات علمية معتمدة دولياً، تؤهلهم للعمل أو مواصلة الدراسة في جميع المراكز العلمية والدولية. تأهيل الطالب أكاديمياً وإكلينيكياً بما يتوافق مع المعايير الدولية، مما يمكّنه من المنافسة في سوق العمل الإقليمي والدولي.إعداد الطالب لاكتساب القدرة على التعلم الذاتي المستمر، عبر تطبيق أفضل الممارسات في طرق التعليم والتعلم الطبي",
    },
    { ar: "إقــرأ الـمــزيـد", en: "Read More" },
  ]);
  return (
    <>
      <div className="bg-[#f7f7f7]">
        <div className=" mx-auto grid grid-cols-2 gap-10 my-20 py-10 relative container">
          <div className="text-right px-10 py-4 ScrollEffectLeft">
            <div>
              <h1 className="font-bold text-3xl mb-10 ">{Text[0].ar}</h1>
              <p>{Text[1].ar}</p>
            </div>
            <div className="absolute bottom-9 left-0">
              <button className="border-2 border-primary rounded-md px-5 py-2 font-bold  text-primary flex gap-2 hover:bg-primary hover:text-white">
                <div className="text-xl ">
                  <IoIosArrowBack />
                </div>
                {Text[2].ar}
              </button>
            </div>
          </div>
          <div className="bg-black h-[400px] ScrollEffectRight ">
            <img
              className="w-full h-full object-cover  transition duration-500 ease-in-out transform hover:scale-105 hover:brightness-"
              src="src/assets/Images/Message.jpg"
              alt=""
            />

          </div>
        </div>
      </div>
    </>
  );
};

export default MessageSection;
