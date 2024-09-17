import { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaShare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import NewsImages from "../MinComponent/NewsImages";

const NewsDetails = () => {
  const pageURL = window.location.href;
  const [socialMedia] = useState([
    { name: "Share", link: "https://www.facebook.com/sharer/sharer.php?u=", icon: <FaShare size={19} /> },
    { name: "Facebook", link: "https://www.facebook.com/sharer/sharer.php?u=", icon: <FaFacebookF size={18} /> },
    { name: "Twitter", link: "https://twitter.com/intent/tweet?url=", icon: <BsTwitterX size={18} /> },
    { name: "LinkedIn", link: "https://www.linkedin.com/sharing/share-offsite/?url=", icon: <FaLinkedinIn size={18} /> },
  ]);
  return (
    <>
      <div>
        <div className="bg-cover bg-center bg-no-repeat bg-[url('src/assets/Images/Cover/NewsCover.png')] h-fit flex items-center justify-center">
          <div className="bg-gradient-to-r from-[#3a1616dd] to-[#3a1616dd] w-full h-full">
            <div className=" py-10 mx-2 lg:mx-32 container m-auto" style={{ direction: "rtl" }}>
              <div className="flex flex-row gap-10 items-start text-[30px]  font-bold text-white text-right mx-auto ">
                <span className="flex flex-col items-center border-l-2 pl-10">
                  <span className="text-6xl">09</span>
                  <span className="text-xl">ديسمبر</span>
                </span>
                <span>التدريب العملي في مستشفى شفاء الأورمان</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto  py-10 text-right">
          <div className="max-w- text-3xl font-semibold leading-normal text-gray-900 dark:text-white flex flex-row-reverse items-center justify-between">
            <div className=" text-gray-500 font-normal dark:text-gray-400 text-sm flex flex-row-reverse items-center text-left">
              <div className=" flex flex-row-reverse items-center ">
                <span>: تم النشر بواسطة </span>
                <span className="font-bold text-gray-600 ">{" جامعة الأقصر "}</span>
                <div className="w-2 h-2 bg-slate-400 rounded-full mx-3"></div>
              </div>
              <span style={{ direction: "rtl" }} className=" flex flex-row-reverse items-center text-gray-500 font-normal text-l">
                {" 09 ديسمبر 2024 "}
              </span>
            </div>

            <div className="flex">
              {socialMedia.map((item, index) => {
                return (
                  <a
                    key={index}
                    href={item.link + pageURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 p-2 rounded-full hover:text-gray-700"
                    title={`Share on ${item.name}`}
                  >
                    {item.icon}
                  </a>
                );
              })}
            </div>
          </div>
          <h1 className="max-w- text-3xl font-semibold leading-normal my-10 text-gray-900 dark:text-white">التدريب العملي في مستشفى شفاء الأورمان</h1>

          <div className="my-16">
            <NewsImages />
          </div>

          <p className=" text-right  text-gray-500 dark:text-gray-400" style={{ direction: "rtl" }}>
            <span className="font-bold">طلاب كلية الطب بجامعة الأقصر يختتمون التدريب العملي في مستشفى شفاء الأورمان لعلاج الأورام </span>
            <br />
            <br /> أنهى طلاب الفرقة الثالثة بكلية الطب بجامعة الأقصر التدريب العملي ضمن مقررات الجراحة العامة، بمستشفى شفاء الأورمان لعلاج الأورام، وذلك تحت رعاية معالي الأستاذ
            الدكتور حمدي محمد حسين، رئيس جامعة الأقصر، وفي إطار البروتوكول المبرم بين كلية الطب بالجامعة، ومستشفى شفاء الأورمان وأوضح رئيس الجامعة؛ أن هذا التدريب يأتي في ضوء تحقيق
            رسالة الجامعة في تخريج كوادر بشرية متخصصة ومؤهلة، لخدمة المنظومة الصحية في محافظة الأقصر وجنوب الصعيد. ووجه رئيس جامعة الأقصر الشكر لإدارة مستشفى شفاء الأورمان وعلى
            <br />
            <br />
            رأسها الدكتور هاني حسين، مدير المستشفى، مثنيًا على الدور الذي يقوم به في الارتقاء بالخدمات الصحية داخل المستشفى. ويجري تدريب طلاب كلية الطب بمستشفى شفاء الأورمان لعلاج
            الأورام، تحت إشراف الأستاذ الدكتور محمد شحات، وكيل الكلية لشئون التعليم والطلاب، والأستاذ الدكتور محمد عطيتو، مدير المستشفيات الجامعية. يشار إلى أن جامعة الأقصر كانت قد
            عقدت بروتوكول تعاون مشترك مع مستشفى شفاء الأورمان لعلاج الأورام، لإعداد كوادر الجامعة ومساهمتهم في تقديم أفضل رعاية صحية طبقًا لمعايير الاعتماد العالمية، وذلك في إطار
            التبادل العلمي بين الجامعة ممثلة فى كلية الطب ومستشفيات شفاء الأورمان، من أجل الاستفادة من التخصصات المختلفة داخل المستشفى مع كلية الطب وتطوير البحث العلمي والمشاركة في
            <br />
            الأبحاث العلمية. شهد مستشفى شفاء الأورمان لعلاج الأورام بالمجان، توقيع بروتوكول تعاون بين جامعة الأقصر ومستشفيات شفاء الأورمان، بحضور رئيس الجامعة وعمداء الكليات
            والدكتور هاني حسين، المدير التنفيذى، لمستشفى شفاء الأورمان ، .
          </p>
        </div>
      </div>
    </>
  );
};

export default NewsDetails;
