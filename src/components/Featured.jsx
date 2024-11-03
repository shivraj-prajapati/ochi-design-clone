export default function Featured() {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-[#B3B3B3] pb-20">
        <h1 className="text-[3.50rem] tracking-tight">Featured projects</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="cardcontainer w-1/2 relative">
            <h1 className="font-HeadingPro absolute -translate-x-1/2 text-8xl z-10 font-extrabold leading-none tracking-tight text-[#CDEA68] left-full whitespace-nowrap -translate-y-1/2 top-[50%]">
              {"CAARDBOAD SPACESHIP".split("").map((item, index) => (
                <span key={index}>
                  {item}
                </span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
                alt=""
                />
            </div>
          </div>
          <div className="cardcontainer w-1/2 relative ">
            <h1 className=" font-HeadingPro absolute translate-x-1/2 text-8xl z-10 font-extrabold leading-nonze tracking-tight text-[#CDEA68] whitespace-nowrap right-full -translate-y-1/2 top-[50%]">
                {"BEAN EVOLUTION".split("").map((item, index) => (
                  <span key={index}>
                    {item}
                  </span>
                ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
