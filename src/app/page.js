import Image from "next/image";
import Header from "./component/header";

export default function Home() {
  return (
    <>
      <div className="bg-[#0A0A0A] h-screen">
        <div className="">
          <Header />
          <div className="text-white md:p-20 p-4">
            <div>
              <div className="md:flex block">
                <div className="space-y-11">
                  <h1 className="text-5xl font-bold">Welcome to Mov Video</h1>
                  <p className="text-[22px] md:w-[40rem]">
                    Enjoy exclusive Amazon Originals as well as popular movies
                    and TV shows for NGN 2,300/month. Watch now, cancel anytime.
                  </p>
                  <div className="flex flex-col items-start gap-4">
                    <button className="border-none text-black bg-white w-72 py-5 rounded-lg font-medium text-[20px]">
                      Mov video member? Sign in
                    </button>
                    <div className="flex items-center gap-6">
                      <hr className="border-t border-white w-28" /> <p>or</p>
                      <hr className="border-t border-white w-28" />
                    </div>
                    <button className="border-none text-black bg-white w-72 py-5 rounded-lg font-medium text-[20px]">
                      Start your 7 days free trial
                    </button>
                  </div>
                </div>
                <Image
                  src="/perr.webp"
                  alt="Movie Image"
                  width={500}
                  height={200}
                  className=" "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
