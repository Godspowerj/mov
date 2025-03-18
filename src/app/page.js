import Image from "next/image";
import Header from "./component/header";

export default function Home() {
  return (
    <>
      <div className="relative bg-[#0A0A0A] h-screen">
        <Image 
          src="/moviebanner1.jpg" 
          alt="Movie Image" 
          layout="fill" 
          objectFit="cover" 
          className="z-0 opacity-50"
        />
        <div className="absolute inset-0 z-10">
          <Header />
          <div className="text-white md:p-16 p-4">
            <div>
              <div className="md:flex items-center block">
                <div className="space-y-6">
                  <h1 className="text-5xl font-bold">Welcome to Mov .</h1>
                  <p className="text-[22px] md:w-[40rem] ">
                    Enjoy exclusive Amazon Originals as well as popular movies and
                    TV shows for NGN 2,300/month. Watch now, cancel anytime.
                  </p>

                  <div className="flex flex-col items-start gap-5">
                    <button>Mov video member? Sign in</button>
                    <button>Start your 7 days free trial</button>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
