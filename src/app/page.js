import Image from "next/image";
import Header from "./component/header";
import Banner from "./component/banner";
import Footer from "./component/footer";

export default function Home() {
  return (
    <>
      <div className="">
        <div className="bg-[#000000]">
          <Header />
          <div className="text-white md:p-20 p-">
            <div>
              <div className="md:flex block">
                <div className="md:hidden block " >
                   <Image src="/imh.jpg" width={500} height={0} className="brightness-50 -z-50" alt="" />
                </div>
             

                <div className="space-y-10 p-5 ">
                  <h1 className="md:text-4xl md:font-bold font-medium text-4xl">
                    Welcome to
                    <span className="tracking-widest leading-4 border-b-4 border-gray-500 p-2">
                      MovStream
                    </span>
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
                      <button className="flex items-center w-[19.511rem] gap-4">
                        <hr className="border-t border-white w-full" />
                        or
                        <hr className="border-t border-white  w-full" />
                      </button>
                    </div>
                    <button className="relative overflow-hidden  before:absolute before:top-0 before:left-[-100%] before:h-full before:w-[150%] before:bg-gradient-to-r before:from-transparent before:via-white/50 before:to-transparent before:blur-md before:transition-all before:duration-1000 hover:before:left-[100%] border-none transform transition-transform duration-300 hover:scale-110 text-[#4d4d4d] bg-[#f1f1f1] leading-[23px]  md:w-[19.511rem] w-full md:py-5 py-4 rounded-lg font-medium text-[20px]">
                      Start your 7 days free trial
                    </button>
                  </div>
                </div>


                <div  className="md:block hidden object-cover h-8" >
                   <Image src="/imh.jpg" width={500} height={0} alt="" className="brightness-50 -z-50" />
                </div>
              </div>
            </div>
          </div>
          <div className="text-white md:flex gap-6 items-start block ">
            <Image
              src="/moviebanner1.jpg"
              alt="Movie Image"
              width={800}
              height={200}
              className="shadow-2xl "
            />

            <div className="space-y-5 md:pb-6 pb-4 p-5 z-50">
              <h1 className="md:text-[50px] text-3xl gap-5 leading-[56px]  font-bold ">
                Great Entertainment
              </h1>
              <p className="font-medium md:text-[20px] text-[17px] leading-[28px]">
                Watch Tom Clancy&s Jack Ryan, award-winning Amazon Originals
                such as The Boys and The Marvelous Mrs. Maisel, as well as
                popular movies and TV shows, with all titles available to
                download.
              </p>

              <button className="border-none transform transition-transform duration-300 hover:scale-110 text-[#4d4d4d] bg-[#f1f1f1] md:w-[15rem] w-full md:py-5 py-4 rounded-lg font-medium leading-[23px] text-[20px]">
                Start your free trial
              </button>
            </div>

            
          </div>
          <Banner/>
          <Footer/>
        </div>
      </div>
    </>
  );
}
