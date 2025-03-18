import Image from "next/image";
import Header from "./component/header";

export default function Home() {
  return (
    <>
      <div className="bg-[#0A0A0A] h-screen ">
        <Header />
        <div className="text-white md:p-16 px-4">
          <div>
            <div>
              <div className="space-y-6">
                <h1 className="text-5xl font-bold">Welcome to Mov .</h1>
                <p className="text-2xl ">
                  Enjoy exclusive Amazon Originals as well as popular movies and
                  TV shows for NGN 2,300/month. Watch now, cancel anytime.
                </p>

                <div className="flex flex-col items-start">
                  <button>Mov video member? Sign in</button>
                  <button>Start your 7 days free trial</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
