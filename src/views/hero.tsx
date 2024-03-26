import React from "react";
import Image from "next/image";
import { ShoppingCart, Search } from "lucide-react";
//import heroImage from "@/public/images/dine_here.webp";
import Featured1 from "@/public/images/Featured1.webp";
import Featured2 from "@/public/images/Featured2.webp";
import Featured3 from "@/public/images/Featured3.webp";
import Featured4 from "@/public/images/Featured4.webp";
import { Button } from "@/components/ui/button";

import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <>
      <div className="main  lg:flex justify-center items-center lg:gap-5">
        {/* right side */}
        <div className="lef  lg:w-1/2 ">
          <Badge className="text-lg bg-[#e1edff] lg:px-6 px-4 lg:py-2 py-1 hover:bg-[#e1edff]  rounded-lg font-bold text-blue-800 ">
            Sale 70%
          </Badge>
          <h1 className="lg:text-6xl sm:text-6xl text-5xl lg:max-w-sm font-bold mt-8 text-slate-900">
            An Industrial Take on Streetwear
          </h1>

          <p className="lg:text-lg  max-w-[350px] mt-10 text-slate-900">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>

          {/* start shopping */}

          <div>
            <Button className="bg-[#212121] h-16  text-lg gap-5  lg:px-4 px-8 mt-7 font-bold hover:bg-[#212121]">
              <ShoppingCart className="stroke-white" />
              <div className=" ">Start Shopping</div>
            </Button>
          </div>
          {/* sponsors images */}
          <div className="sponser md:flex gap-4 md:gap-x-12 mt-10 grid grid-cols-2 ">
            <Image src={Featured1} alt="event1" />
            <Image src={Featured2} alt="event2" />
            <Image src={Featured3} alt="event3" />
            <Image src={Featured4} alt="event4" />
          </div>
        </div>
        {/* left side */}
        <div className="right lg:w-1/2    rounded-full hidden lg:block  bg-[#ffece3]  ">
          <Image
            src="/images/dine_here.webp"
            width={1000}
            height={1000}
            alt="hero image"
            className=" md:w-[100] "
          />
        </div>
      </div>
    </>
  );
}
