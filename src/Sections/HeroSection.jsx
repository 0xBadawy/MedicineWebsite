import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-no-repeat bg-[url('src/assets/Images/Cover/MainCover.png')] h-[90vh] flex items-center justify-center">
        <div className="bg-gradient-to-r from-[#ffffff00] to-[#0b0202bc] w-full h-full">
          <div className="text-right container mx-auto">
            <div className="text-right pt-60">
              <h1 className="flex flex-col items-end text-[110px]  font-bold text-white ">
                <span>كـلـيــة الــطــب</span>
                <span className="">جامعة الأقصر</span>
              </h1>
            </div>
            <div className="items-center mx-auto mt-[150px]">
              <div className="w-[650px] h-[90px] rounded-3xl bg-white mx-auto shadow-[#555] shadow-md p-3 grid grid-cols-3">
                <div className="transition duration-300 ease-in-out hover:opacity-50 ">
                  <FaUserGraduate className="text-[#0b0202] text-4xl mx-auto" />
                  <p className="text-[#0b0202] text-center">الخرجين</p>
                </div>

                <div className="border-r-2 border-l-2 transition duration-300 ease-in-out hover:opacity-50 ">
                  <FaChalkboardTeacher className="text-[#0b0202] text-4xl mx-auto " />
                  <p className="text-[#0b0202] text-center text-inherit">أعضاء هيئة التدريس</p>
                </div>
                <div className="transition duration-300 ease-in-out hover:opacity-50 cursor-pointer">
                  <FaPeopleGroup className="text-[#272222] text-4xl mx-auto" />
                  <p className="text-[#0b0202] text-center">الطلاب</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
