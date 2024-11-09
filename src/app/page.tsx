import React from "react";
import Header from "./components/Header";
import Image from "next/image";

function Home() {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex h-[80%]">
       
        <div className="w-1/2 flex flex-col justify-center items-start m-12">
          <h1 className="text-[44px] font-bold">IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
          <p className="text-[32px] w-[902px]">
            An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
          </p>
          <button className="bg-[#A29875] font-sans text-[#FFFFFF] w-[228px] h-[58px] p-10px  gap-10px  mt-4 ">
            Contact Us
          </button>
        </div>

        {/* Right Section with Image */}
        <div className="w-1/2 flex justify-center items-center">
          <div className="relative w-full h-full max-w-[462px] max-h-[647px]">
            <Image
              src="/images/figma.jpg"
              alt="hero image"
              layout="fill" 
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
