import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className=" flex flex-col items-center w-[1046px] py-[80px] absolute left-[197px] top-[104px] gap-[80px]">
        <div className="w-[701px] ">
          <div className="flex flex-col items-center w-[699px] gap-[40px] py-[40px] ">
            <h5 className="text-sky-blue text-base"> Welcome </h5>
            <h1 className="text-[58px] text-center w-[542px]">
              Selling on the internet like a pro
            </h1>
            <h4 className="text-xl font-normal text-center w-[536px] ">
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </h4>
            <div className="flex gap-[10px]">
              <button className="text-sm font-bold text-center bg-sky-blue text-white px-[40px] py-[15px] rounded-[5px]">
                Get Quote Now
              </button>
              <button className="text-sm font-bold text-center border border-sky-blue text-sky-blue px-[40px] py-[15px] rounded-[5px]">
                Learn more
              </button>
            </div>
          </div>
        </div>

        <div className="w-auto flex justify-between gap-[30px]">
          <div className="flex flex-col w-[328px] py-[35px] px-10 gap-[20px] bg-white ">
            <div className=" flex gap-[10px] w-[70px] h-[76px] bg-[#FFDCD1] rounded-[10px] drop-shadow-md px-[19px] py-[22px] "></div>
            <h3 className="text-black"> Training Courses</h3>
            <div className="h-[2px] w-[50px] bg-red "></div>
            <p>
              {" "}
              The gradual accumulation of information about atomic and
              small-scale behaviour...
            </p>
          </div>

          <div className="flex flex-col w-[328px] py-[35px] px-10 gap-[20px] bg-white">
            <div className="flex gap-[10px] w-[70px] h-[76px] bg-[#B9EAA8] rounded-[10px] px-[19px] py-[22px]"></div>
            <h3 className="text-black"> 2,769 Online Courses</h3>
            <div className="h-[2px] w-[50px] bg-red "></div>
            <p>
              {" "}
              The gradual accumulation of information about atomic and
              small-scale behaviour...
            </p>
          </div>

          <div className="flex flex-col w-[328px] py-[35px] px-10 gap-[20px] bg-sky-blue">
            <div className="flex gap-[10px] w-[70px] h-[76px] bg-white rounded-[10px] px-[19px] py-[22px]"></div>
            <h3> Training courses</h3>
            <div className="h-[2px] w-[50px] bg-white "></div>
            <p className="text-white">
              {" "}
              The gradual accumulation of information about atomic and
              small-scale behaviour...
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
