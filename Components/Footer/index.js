/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
'use client'

import { useState, useEffect } from "react";

import { useRouteData } from "@/Hooks/route_data";
import { useGlobalData } from "@/Hooks/global_data";
import { useFooterData } from "@/Hooks/footer_data";


import FooterBg from "/public/imgs/footer/footer_bg.png";
import headerLogo from "/public/imgs/footer/footer_logo.png";
import Link from "next/link";
import Image from "next/image";

export function FooterList({ name = "", items = [],classes }) {
  return (
    <div>
      <div className={`w-max space-y-4   ${classes}`}>
        <strong className="text-[--primary]">{name}</strong>
        <section className="w-full flex flex-col gap-3 md:gap-6 text-sm xl:text-base">
          {items.map((z, i) => {
            return (
              <a key={i} href={z.link} className="text-white">
                {z.name}
              </a>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export function MobileFooterList({ name = "", items = [] }) {
  return (
    <>
      <div className="w-max space-y-4 xl:hidden">
        <strong className="text-[--primary]">{name}</strong>
        <section className="w-full flex flex-col gap-3 md:gap-6 text-sm xl:text-base">
          {items.map((z, i) => {
            return (
              <a key={i} href={z.link} className="text-white">
                {z.name}
              </a>
            );
          })}
        </section>
      </div>
    </>
  );
}

export default function Footer() {
  const {
    content1 = "",
    content2 = "",
    content3 = "",
    content4 = "",
    socials = [],
    content5 = "",
    content6 = "",
    content7 = "",
  } = useFooterData();

  const { logo } = useGlobalData();

  return ( //HTML Starts here
    <footer
      className="
       w-full
       pt-14 lg:py-14   lg:h-[88vh] 
      "
    >
         <div
        className="
        flex items-center lg:gap-0 justify-center
        bg-black h-fit lg:h-full rounded-t-xl xl:rounded-xl p-8
        responsive-container text-white lg:flex-col relative max-lg:hidden"
      >
        <div className="flex lg:justify-between lg:w-full lg:px-24">
       
       <div className="left-footer lg:flex lg:flex-col gap-12 p-4">

        <div className="logo-part flex flex-col items-center lg:items-start gap-3">
        <Link href={logo.path} className="logo-link ">
              <Image src={headerLogo} alt="ETHERWISE" />
            </Link>
            <p className="text-center">{content4}</p>
        </div>

        <div
          className="
          flex lg:flex-row items-center justify-center gap-24 gap-y-12
          w-full h-max 
          "
        >
          
          <FooterList {...content5} classes={"text-left"}/>
          <FooterList {...content6} classes={"text-left"}/>
          {/* <FooterList {...content7} /> */}

        </div>
       </div>
       <div className="right-footer flex flex-col gap-10  p-4 pt-6">

       <div className="social-icons">
          <section className="w-full flex justify-evenly text-2xl">
              {socials.map((z, i) => {
                return (
                  <a key={i} href={z.link} className="text-white">
                    {<z.icon />}
                  </a>
                );
              })}
            </section>
          </div>

          <div className="get-in-touch ">
          <div
            className="
          flex flex-col items-center gap-2
          lg:w-full
          bg-no-repeat bg-cover bg-center
          
          "
          >
            
            <section
              className="
            py-2
            text-5xl font-stretched
            "
            >
              <h4 className="my-1">
                <strong className="font-bold">{content2}</strong>
              </h4>
            </section>
            <section className="mb-4">
              <p className="text-center">
                Don’t miss out on anything! Receive the latest news and
                <br />
                product updates from Etherwise
              </p>
            </section>
            <section
              className="
            flex my-1 
            rounded-full p-1 border-2 lg:w-[90%]"
            >
              <input
                type="mail"
                placeholder="Email Address"
                className="outline-0 w-full px-2 bg-transparent"
              />
              <button className="gradient-bg rounded-full lg:px-4 px-8">
                Connect With Us
              </button>
            </section>
          </div>
          </div>
     
       </div>
        
      </div>

      <div className="text-center text-nowrap absolute bottom-[4%]">
Copyright 2023-2024, All Rights Reserved.
</div> 
       
       
      </div>

      <div // Footer for mobile devices
        className="
        flex items-center flex-col  
        bg-black h-[100vh] p-8
         text-white relative lg:hidden"
      >

<div className="flex flex-col w-full lg:px-24">
       
       <div className="left-footer lg:flex bg-gray-950 rounded-lg lg:flex-col gap-12 p-4">

        <div className="logo-part flex flex-col items-center lg:items-start gap-3">
        <Link href={logo.path} className="logo-link ">
              <Image src={headerLogo} alt="ETHERWISE" />
            </Link>
            <p className="text-center">{content4}</p>
        </div>

       </div>
       <div className="flex flex-col w-full gap-10  pb-6 pt-3">

       <div className="social-icons">
          <section className="w-full flex justify-evenly text-2xl">
              {socials.map((z, i) => {
                return (
                  <a key={i} href={z.link} className="text-white">
                    {<z.icon />}
                  </a>
                );
              })}
            </section>
          </div>

          <div
          className="
          flex flex-row items-center justify-center  gap-y-12 w-full h-fit ">
          
          <FooterList {...content5} classes={"text-left"}/>
          <FooterList {...content6} classes={"text-right"}/>
          {/* <FooterList {...content7} /> */}

        </div>

          <div className="get-in-touch ">
          <div
            className="
          flex flex-col items-center gap-2
          lg:w-full
          bg-no-repeat bg-cover bg-center
          
          "
          >
            
            <section
              className="
            py-2
            text-5xl font-stretched
            "
            >
              <h4 className="my-1 w-full">
                <strong className="font-bold">{content2}</strong>
              </h4>
            </section>
            <section className="mb-4">
              <p className="text-center">
                Don’t miss out on anything! Receive the latest news and
                <br />
                product updates from Etherwise
              </p>
            </section>
            <section
              className="
            flex my-1 
            rounded-full p-1 border-2 lg:w-[90%]"
            >
              <input
                type="mail"
                placeholder="Email Address"
                className="outline-0 w-full px-2 bg-transparent"
              />
              <button className="gradient-bg rounded-full lg:px-4 px-8">
                Connect With Us
              </button>
            </section>
          </div>
          </div>
     
       </div>
        
      </div>




<div className="text-center absolute bottom-[4%] bg-red-600 ">
Copyright 2023-2024, All Rights Reserved.
</div> 
      </div>

    </footer>
  );
}
