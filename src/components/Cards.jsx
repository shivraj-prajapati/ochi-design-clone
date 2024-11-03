export default function Cards() {
  return (
    <div className="w-full h-screen bg-[#F1F1F1] flex gap-5 px-20">
      <div className="cardcontainer h-[25.313rem] w-1/2">
        <div className="card relative flex justify-center w-full h-full rounded-xl items-center bg-[#004D43]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="border-[#CDEA68] rounded-full px-3 text-[#CDEA68] py-1 border-2 absolute left-8 bottom-8">
            &copy;2019-2024
          </button>
        </div>
      </div>
      <div className="cardcontainer h-[25.313rem] w-1/2 flex gap-5">
        <div className="card relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#212121]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="border-[#F1F1F1] rounded-full px-3 text-[#F1F1F1] py-1 border-2 absolute left-8 bottom-8">
          Rating 5.0 on Clutch
          </button>
        </div>
        <div className="card relative flex items-center justify-center  w-1/2 h-full rounded-xl bg-[#212121]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="border-[#F1F1F1] rounded-full px-3 text-[#F1F1F1] py-1 border-2 absolute left-8 bottom-8">
          Business Bootcamp Alumni
          </button>
        </div>
      </div>
    </div>
  );
}
