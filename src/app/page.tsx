'use client'
import Link from "next/link";
import Header from "./components/header";
import Footer from "./components/footer";
import Featured from "./components/featured";
import { useState, useEffect } from "react";
import Products from "./components/products";
import Image from "next/image";

export default function Home() {
  
  return (
    <main>
      <Header />
    
      {/* Hero Content */}
      <div className="flex justify-center items-center">
        <Image
          className="relative w-full h-auto max-w-[1321px] md:max-h-[850px] object-cover z-0"
          src="/heroimg.png"
          alt="Hero Image"
          width={500} height={300}
        />
        <p className="absolute font-light text-sm tracking-[1.7px] -mt-[388px] -ml-[1007px] bg-gray-100 ">
          WELCOME TO CHAIRY
        </p>
        <h1 className="px-4 absolute font-bold md:text-6xl md:-ml-[630px] md:-mt-[150px] bg-gray-100 md:p-5 text-2xl -ml-[210px] -mt-8">
          Best Furniture <br /> Collection For Your <br /> Interior
        </h1>
        <Link href="/products">
          <div className="absolute flex items-center justify-center gap-x-3 bg-cyan-600 md:p-4 md:px-8 md:rounded-lg md:-ml-[1251px] md:mt-[88px] -ml-[460px] mt-8 p-2 px-4 md:text-base text-[12px] rounded-md">
            <button className="text-white">Shop Now</button>
            <Image className="w-4" src="/right-arrow.png" alt="right arrow" width={500} height={300}/>
          </div>
        </Link>
      </div>

      <div className="flex justify-center items-center flex-wrap gap-8 mt-8 md:gap-x-24 md:mt-0">
        <Image className="w-[85px] h-[87px]" src="/zapier.png" alt="Zapier" width={500} height={300}/>
        <Image
          className="w-[107px] h-[109px]"
          src="/pipedrive.png"
          alt="Pipedrive"
          width={500} height={300}
        />
        <Image className="w-[135px] h-[139px]" src="/cibbank.png" alt="CibBank" width={500} height={300}/>
        <Image className="w-[63px] h-[65px]" src="/z.png" alt="Z"width={500} height={300} />
        <Image className="w-[98px] h-[101px]" src="/burn.png" alt="Burn" width={500} height={300}/>
        <Image className="w-[113px] h-[115px]" src="/panda.png" alt="Panda" width={500} height={300}/>
        <Image className="w-[84px] h-[87px]" src="/moz.png" alt="Moz"  width={500} height={300}/>
      </div>

       {/* Featured*/}
      <Featured/>
     

      {/* Top Categories */}
      <h2 className="text-[32px] font-semibold mt-10 md:mt-52 text-center">
        Top Categories
      </h2>
      <div className="flex justify-center items-center  md:gap-x-5 mt-10 ">
        {/* Card 1 */}
        <div className="card group  relative">
          <div className="img relative ">
            <Image width={200} height={200}
              className="md:w-[424px] md:h-[424px] w-[400px] h-[170px] px-3 "
              src="/category.png"
              alt=""
            />
          </div>
        </div>
        {/* Card 2 */}
        <div className="card group  relative">
          <div className="img relative ">
            <Image width={200} height={200}
              className="md:w-[424px] md:h-[424px] w-[400px] h-[170px] px-3 "
              src="/category-1.png"
              alt=""
            />
          </div>
        </div>
        {/* Card 3*/}
        <div className="card group  relative">
          <div className="img relative ">
            <Image width={200} height={200}
              className="md:w-[424px] md:h-[424px] w-[400px] h-[170px] px-3"
              src="/category-2.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Explore */}
      <div className="flex justify-center items-center mt-16 md:mt-32 md:gap-x-5 ">
        <h3 className="md:text-[34px] font-normal -rotate-90 w-[642px] h-[52px] absolute lg:-ml-[1400px] -ml-[420px] -mt-80 md:mt-0 text-base">
          EXPLORE NEW AND POPULAR STYLES
        </h3>
        <div>
          <Image width={200} height={200}
            className="md:w-[648px] md:h-[648px] w-[180px] h-[280px] rounded-lg p-1  ml-7"
            src="/Image-2.png"
            alt=""
          />
        </div>
        <div className="">
          <Image width={200} height={200}
            className="md:w-[312px] md:h-[312px] w-[140px] h-[140px] p-[1px]  md:mb-5 rounded-lg"
            src="/Image-3.png"
            alt=""
          />
          <Image width={200} height={200}
            className="md:w-[312px] md:h-[312px] w-[140px] h-[140px]  p-[1px] rounded-lg "
            src="/card.png"
            alt=""
          />
        </div>
        <div className="">
          <Image width={200} height={200}
            className="md:w-[312px] md:h-[312px] w-[140px] h-[140px] p-[1px]  md:mb-5 rounded-lg"
            src="/Image.png"
            alt=""
          />
          <Image width={200} height={200}
            className="md:w-[312px] md:h-[312px] w-[140px] h-[140px] p-[1px]  rounded-lg"
            src="/Image.png"
            alt=""
          />
        </div>
      </div>

      {/* Our Products */}
      <Products />
      
     
      

      <Footer />
    </main>
  );
}
