import React from "react";
{
  /* import svg image */
}
import Image from "../../assets/Images/404 Error-rafiki.svg";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const NewsNotFound = () => {
  return (
    <div className="flex items-center flex-col mx-auto my-10">
      <img className="w-[30%] mx-auto" src={Image} alt="" />
      <h1 className="text-center text-xl font-bold">هذا الخبر غير موجود </h1>
      <Link to="/" className=" my-4 border-2 border-primary rounded-md px-5 py-2 font-bold  text-primary flex gap-2 hover:bg-primary hover:text-white">
        <div className="text-xl ">
          <IoIosArrowBack />
        </div>
        {"العودة الى اخر الاخبار"}
      </Link>
    </div>
  );
};

export default NewsNotFound;
