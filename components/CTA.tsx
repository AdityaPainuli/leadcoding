import React from "react";
import Image from "next/image";
const CTA = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row w-[90%] m-auto bg-gray-50 mt-[2rem] py-[2rem]">
      <div className="text-center lg:text-left mt-[2rem] text-black">
        <h1 className="text-3xl font-bold leading-[1.2] my-[2rem] ">
          Want To Learn Data Structure & Algorithms in a fun way?
        </h1>
        <button className="text-white ml-4 cursor-pointer w-[150px] bg-blue-600 p-2 rounded-md">
          Learn DSA
        </button>
      </div>
      <img src="/learn.svg" className="object-contain h-[300px] m-auto" />
    </div>
  );
};

export default CTA;
