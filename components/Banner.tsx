import Image from "next/image";

const Banner = () => {
  return (
    <main className="lg:flex items-center justify-center px-2">
      <div className="px-4 lg:w-[50%] py-[3rem]">
        <h1 className="font-bold text-6xl w-[90%] p-2 leading-[1.1]">
          Welcome to Lead Coding by Fraz
        </h1>
        <span className="font-semibold text-lg py-2 text-blue-500">
          Want to improve your programming skills?
        </span>
        <p className="w-[80%] py-2 ">
          Learn Data Structure and Algorithms by practicing all patterns of
          questions with the help of video lectures and clean articles.
        </p>
        <button className="text-white mt-4 cursor-pointer w-[150px] bg-blue-600 p-2 rounded-md">
          Start Today
        </button>
      </div>
      <Image height={"600px"} width={"600px"} src="/banner.svg" />
    </main>
  );
};

export default Banner;
