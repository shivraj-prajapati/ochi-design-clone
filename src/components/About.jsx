export default function About() {
  return (
    <div className="w-full bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl font-[#212121]">
      <div className="p-16">
      <h1 className="text-[3.5vw] leading-[3.7vw] tracking-tight">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to{" "}
        <span className="underline decoration-[#212121]">raise funds</span>,
        <span className="underline decoration-[#212121]"> sell prod­ucts</span>,{" "}
        <span className="underline decoration-[#212121]">
          ex­plain com­plex ideas
        </span>
        , and{" "}
        <span className="underline decoration-[#212121]">
          hire great peo­ple
        </span>
        .
      </h1>
      </div>    
    <div className="border-t-[1px] px-20 pt-4 pb-10 border-[#B3B3B3] mt-10 flex gap-5">
        <div className="w-1/2">
            <h1 className="text-6xl">Our approach:</h1>
            <button className="px-7 py-4 rounded-full mt-6 flex items-center justify-center gap-6 text-white uppercase bg-[#212121]">Read More
                <div className="w-2 h-2 rounded-full bg-white"></div>
            </button>
        </div>
        <div className="w-1/2 h-[31.597rem] bg-slate-700 rounded-lg">
            
        </div>
    </div>
    </div>
  );
}
