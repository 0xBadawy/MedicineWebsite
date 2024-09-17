import React from "react";

const DeanCard = (props) => {
    const Data  = props.Data;
  return (
    <div className=" mx-auto">
      <div
        className={` transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl bg-white border h-[350px]  border-gray-200 rounded-lg shadow-md overflow-hidden w-72 mx-auto ScrollEffectAppe ${
          Data.id == 2 ? "ScrollEffectTop" : Data.id == 1 ? "ScrollEffectLeft" : "ScrollEffectRight"
        } `}
      >
        <div className="pt-4">
          <img className="rounded-full h-[150px] mx-auto w-[150px] transition duration-500 ease-in-out transform hover:scale-110" src={Data.image} alt="" />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 my-7">{Data.name}</h1>
          <p className="text-slate-600">{Data.position}</p>
          {/* <p className="text-slate-600">{Data.department}</p> */}
        </div>
      </div>
    </div>
  );
};

export default DeanCard;
