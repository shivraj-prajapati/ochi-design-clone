import React from "react";

export default function Eyes() {
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div className='relative w-full bg-center bg-cover h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className="absolute top-1/2 left-1/2 flex gap-10 -translate-x-[50%] -translate-y-[50%]">
          <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-white">
            <div className="w-2/3 h-2/3 flex items-center justify-center rounded-full bg-black">
              <div className="line w-full h-10">
                <div className="w-10 h-10 rounded-full bg-white"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-white">
            <div className="w-2/3 h-2/3 flex items-center justify-center rounded-full bg-black">
              <div className="line w-full h-10">
                <div className="w-10 h-10 rounded-full bg-white"></div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
