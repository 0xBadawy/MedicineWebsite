import React, { useContext, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

const Footer = () => {
  const [socialMedia, setSocialMedia] = useState([
    { text: { en: "Facebook", ar: "فيسبوك" }, link: "https://www.facebook.com" },
    { text: { en: "Twitter", ar: "تويتر" }, link: "https://www.twitter.com" },
    { text: { en: "Instagram", ar: "إنستغرام" }, link: "https://www.instagram.com" },
  ]);

  const [footerLinks, setFooterLinks] = useState([
    { text: { en: "About Us", ar: "عنا" }, link: "#" },
    { text: { en: "Services", ar: "الخدمات" }, link: "#" },
    { text: { en: "Contact Us", ar: "تواصل معنا" }, link: "#" },
  ]);

  const [Contact, setContact] = useState([
    { text: { en: "info@ffa.edu.eg", ar: "عنا" }, link: "#" },
    { text: { en: "01047373989", ar: "الخدمات" }, link: "#" },
    { text: { en: "09504303", ar: "تواصل معنا" }, link: "#" },
  ]);

  const appSetting = true;

  return (
    <>
      <footer className="h-[200px] bg-[#611112] text-white   " style={{ direction: "rtl" }}>
        <div className="container mx-auto h-full">
          <div className="grid grid-cols-4">
            <div className="w-full mt-3 items-center">
              <img
                src="src/assets/Images/Logo/LogoBlack.png"
                className="w-[120px] mx-auto
              transition duration-100 ease-in transform hover:scale-105"
                alt=""
              />
              <p className="text-[10px] text-center   w-[60%] mx-auto">
                كلية الطب جامعة الأقصر تهدف إلى تخريج أطباء مؤهلين علميًا وإكلينيكيًا بمعايير دولية، مع التركيز على التعلم الذاتي المستمر، ودعم البحث العلمي، وخدمة المجتمع بشكل
                فعال{" "}
              </p>
            </div>
            <div>
              <h6 className="my-5">روابط هامة</h6>
              <ul>
                {footerLinks.map((item, index) => (
                  <li key={index}>
                    <a href="" className="flex items-center transition duration-100 ease-in transform hover:opacity-70 w-fit font-light">
                      <IoIosArrowBack />
                      {item.text.ar}
                    </a>
                  </li>
                ))}
              </ul>
            </div>{" "}
            <div>
              <h6 className="my-5">تابعنا على</h6>
              <ul>
                {socialMedia.map((item, index) => (
                  <li key={index}>
                    <a href="" className="flex items-center transition duration-100 ease-in transform  hover:opacity-70 w-fit font-light">
                      <IoIosArrowBack />
                      {item.text.ar}
                    </a>
                  </li>
                ))}
              </ul>
            </div>{" "}
            <div>
              <h6 className="my-5">تواصل معنا</h6>
              <ul>
                {Contact.map((item, index) => (
                  <li key={index}>
                    <a href="" className="flex items-center transition duration-100 ease-in transform hover:opacity-70 w-fit font-light">
                      <IoIosArrowBack />
                      {item.text.en}
                    </a>
                  </li>
                ))}
              </ul>
            </div>{" "}
          </div>
        </div>

        {/* <hr className="text-white" /> */}
        <div className="  bg-[#38090a] text-center font-light p-3 transition duration-100 ease-in transform hover:underline">
          {"جميع الحقوق محفوظة @ كلية الطب - جامعة الأقصر 2024  "}
        </div>
      </footer>
    </>
  );
};

export default Footer;
