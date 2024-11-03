import { GoArrowUpRight } from "react-icons/go";

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen bg-[#F1F1F1] pt-1">
      {/* Main text structure */}
      <div className="textstructure mt-20 md:mt-36 px-5 md:px-20">
        {["We Create", "eye-opening", "presentations"].map((text, index) => (
          <div key={index} className="masker">
            <div className="w-fit flex items-center">
              {index === 1 && (
                <div className="w-[20vw] h-[8vw] md:w-[9vw] md:h-[5vw] bg-green-500 rounded-md mr-3"></div>
              )}
              <h1 className="font-HeadingPro leading-[10vw] md:leading-[7.5vw] uppercase font-semibold text-[10vw] md:text-[6.5rem]">
                {text}
              </h1>
            </div>
          </div>
        ))}
      </div>
      
      <div className="border-t-[1px] border-[#B3B3B3] mt-10 md:mt-[3.8rem] flex flex-col md:flex-row justify-between items-start md:items-center py-5 px-5 md:px-20 gap-5 md:gap-0">        
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((text, index) => (
          <p
            key={index}
            className="text-md md:text-md text-[#212121] tracking-tight leading-tight"
          >
            {text}
          </p>
        ))}
        
        <div className="start flex items-center gap-5">
          <div className="py-2 px-4 text-sm md:text-base uppercase whitespace-nowrap border-[2px] rounded-full border-[#212121] hover:bg-[#212121] hover:text-white transition-all duration-200">
            Start the Project
          </div>
          <div className="w-8 h-8 border-[2px] flex items-center justify-center rounded-full border-[#212121]">
            <GoArrowUpRight size="20px" />
          </div>
        </div>
      </div>
    </div>
  );
}
