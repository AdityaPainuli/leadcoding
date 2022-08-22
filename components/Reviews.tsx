import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Reviews = () => {
  return (
    <div className="bg-gray-100 py-4 flex flex-col justify-center w-full px-4 lg:px-0 items-center">
      <h1 className="text-4xl mb-4 font-bold text-center">
        What did our Students have to say? 💖💖
      </h1>
      <div className="lg:w-[600px] w-[90%] my-[2rem] ">
        <Swiper spaceBetween={50} slidesPerView={1}>
          <SwiperSlide className="flex flex-col justify-center items-center space-y-4 cursor-grab">
            <p className="font-semibold text-lg">
              Thank You So Much For this Awesome Platform.. I never expect that
              this will be free for us. Now, i am feeling more motivated and
              committed because someone put so much effort for us(specially free
              of cost). I guess this journey with You will definitely pay me off
              in my career.. 💖😇
            </p>
            <div className="flex space-x-2 items-center">
              <img
                src="./avatar01.webp"
                className="rounded-full h-[50px] w-[50px]"
              />
              <span className="font-bold">Mukesh Sharma</span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col justify-center items-center space-y-4 cursor-grab">
            <p className="font-semibold text-lg">
              Thank You So Much For this Awesome Platform.. I never expect that
              this will be free for us. Now, i am feeling more motivated and
              committed because someone put so much effort for us(specially free
              of cost). I guess this journey with You will definitely pay me off
              in my career.. 💖😇
            </p>
            <div className="flex space-x-2 items-center">
              <img
                src="./avatar01.webp"
                className="rounded-full h-[50px] w-[50px]"
              />
              <span className="font-bold">Mukesh Sharma</span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col justify-center items-center space-y-4 cursor-grab">
            <p className="font-semibold text-lg">
              Thank You So Much For this Awesome Platform.. I never expect that
              this will be free for us. Now, i am feeling more motivated and
              committed because someone put so much effort for us(specially free
              of cost). I guess this journey with You will definitely pay me off
              in my career.. 💖😇
            </p>
            <div className="flex space-x-2 items-center">
              <img
                src="./avatar01.webp"
                className="rounded-full h-[50px] w-[50px]"
              />
              <span className="font-bold">Mukesh Sharma</span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col justify-center items-center space-y-4 cursor-grab">
            <p className="font-semibold text-lg">
              Thank You So Much For this Awesome Platform.. I never expect that
              this will be free for us. Now, i am feeling more motivated and
              committed because someone put so much effort for us(specially free
              of cost). I guess this journey with You will definitely pay me off
              in my career.. 💖😇
            </p>
            <div className="flex space-x-2 items-center">
              <img
                src="./avatar01.webp"
                className="rounded-full h-[50px] w-[50px]"
              />
              <span className="font-bold">Mukesh Sharma</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
