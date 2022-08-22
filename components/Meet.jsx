import Image from "next/image";

const Meet = () => {
  return (
    <div className="flex  flex-col-reverse lg:flex-row items-center">
      <div className=" lg:w-[50%] p-4 ">
        <p className="font-semibold text-lg w-[80%] m-auto">
          I love teaching. I have made this website to make DSA easy and fun to
          learn. So here we have very clean and organized lectures where each
          lecture contains the practice question, notes, and a very nice video.
          Enjoy learning.
        </p>
        <span className="flex w-[90%] justify-end font-bold text-blue-600 text-lg mt-2">
          -Fraz(Instructor)
        </span>
      </div>
      <div className="lg:w-[50%] flex flex-col items-center justify-center">
        <div className="h-[200px] w-[200px]  mt-[2rem] rounded-full overflow-hidden">
          <img src="/fraz.webp" className="h-[100%] w-[100%] " />
        </div>
        <div className="px-4 text-center">
          <h1 className="text-4xl font-bold text-center">Mohammad Fraz</h1>
          <span className="font-semibold   text-blue-600">
            Ex Educator @Codechef | Ex Educator @Unacademy | Ex Educator @Coding
            Ninjas
          </span>
          <div className="flex justify-center my-4 mt-[2rem] space-x-[1.5rem]">
            <div className="flex space-y-2 flex-col items-center">
              <img src="/google.png" height={40} width={40} />
              <span className="font-semibold text-xl ">
                Software Engineer 2
              </span>
            </div>
            <div className="h-[90px] w-[2px] bg-black" />
            <div className="flex space-y-2 flex-col items-center">
              <img src="/youtube.png" height={40} width={40} />
              <span className="font-semibold text-xl"> 130K+ subscribers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meet;
