import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

import FiveStars from "@/components/FiveStars";
import UserImages from "@/components/UserImages";
import Dotpoints from "@/components/Dotpoints";
import Phone from "@/components/Phone";
export default function Home() {
  return (
    <>

    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                {/* <img src="/snake-1.png" alt="" className="w-full"/> */}
                <Image
                  src="/snake-1.png"
                  alt=""
                  className="w-full"
                  // in difference screen can display
                    layout="responsive"
                    width={500}
                      height={500}
                    />

              </div>
              {/* line space and line height */}
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">Your Image on a  <span className="bg-green-600 px-2 text-white">
                  Custom </span> Phone Case
              </h1>
              {/* max-w-prose--> keep the read friendly 65characters */}
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Capture your favorite memories with your own,<span className="font-semibold">one-of-one </span>Phone case.
                CaseCobra allows you to protect your memories, not just your phone case.
              </p>

              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
               <Dotpoints/>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                {/* negative x space   */}
               <UserImages/>
                <div className="flex flex-col justify-between items-center sm:items-start">
                 <FiveStars/>
             
                <p> <span className="font-semibold">1.5M</span> happy customers</p>
              </div> </div>
            </div>
          </div>

          {/* grid col-1 */}
          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              {/* only between sm and large will display */}
              <Image src="/your-image.png" className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block " width="200" height="400" alt=""/>
              <Image src="/line.png" className="absolute w-20 -left-6 -bottom-6 select-none" width="200" height="400" alt=""/>
              <Phone className="w-64" imgSrc="/testimonials/1.jpg"/>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* value proposition section*/}
      <section className="bg-slate-100 py-24">
       <MaxWidthWrapper className='flex flex-col items-center gap-16 sm:gap-32'>
        <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
          <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
            What our <span className="relative px-2">customers</span> say?</h2>
          </div> 
        </MaxWidthWrapper>
      </section>
    </div>
    </>
  );
}
