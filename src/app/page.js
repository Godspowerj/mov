import Image from "next/image";
import Header from "./component/header";

export default function Home() {
  return (
    <>
      <div className="bg-[#00050d] h-screen">
        <div className="">
          <Header />
          <div className="text-white md:p-20 p-4">
            <div>
              <div className="md:flex block">
                <div className="space-y-11">
                  <h1 className="md:text-5xl md:font-bold font-medium text-4xl whitespace-nowrap">
                    MovStream the Best
                  </h1>
                  <p className="text-[20px] leading-[28px] font-medium md:w-[40rem]">
                    Enjoy exclusive Amazon Originals as well as popular movies
                    and TV shows for NGN 2,300/month. Watch now, cancel anytime.
                  </p>
                  <div className="flex flex-col md:items-start items-center  gap-4">
                    <button className="border-none transform transition-transform duration-300 hover:scale-110 text-[#4d4d4d] bg-[#f1f1f1] md:w-[19.511rem] w-full md:py-5 py-4 rounded-lg font-medium leading-[23px] text-[20px]">
                      Mov video member? Sign in
                    </button>
                    <div className="flex items-center gap-6">
                      <hr className="border-t border-white md:w-28 w-36" /> <p>or</p>
                      <hr className="border-t border-white md:w-28 w-36" />
                    </div>
                    <button className="relative overflow-hidden  before:absolute before:top-0 before:left-[-100%] before:h-full before:w-[150%] before:bg-gradient-to-r before:from-transparent before:via-white/50 before:to-transparent before:blur-md before:transition-all before:duration-1000 hover:before:left-[100%] border-none transform transition-transform duration-300 hover:scale-110 text-[#4d4d4d] bg-[#f1f1f1] leading-[23px]  md:w-[19.511rem] w-full md:py-5 py-4 rounded-lg font-medium text-[20px]">
                      Start your 7 days free trial
                    </button>
                  </div>
                </div>
                {/* <Image
                  src="/perr.webp"
                  alt="Movie Image"
                  width={500}
                  height={200}
                  className=" "
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
