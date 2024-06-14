'use client'

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";

import { useRouteData } from "../../Hooks/route_data";
import { useGlobalData } from "../../Hooks/global_data";

import headerLogo from "/public/imgs/header/logo.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";

export function Nav({ navOpen=false, className="" }) {
  const routeData = useRouteData();

  const linkRefs = useRef([]);
  linkRefs.current = [];

  useEffect(() => {
    const tl = gsap.timeline();
    linkRefs.current.forEach((link, index) => {
      // Check if the current link is the first one
      if (index === 0) {
        tl.fromTo(link, {
          opacity: 0
        }, {
          opacity: 1,
          delay: 0.5 // Delay of 0.5 seconds before animating the first element
        });
      } else {
        tl.fromTo(link, {
          opacity: 0
        }, {
          opacity: 1,
          duration: 0.5
          // No delay for other elements, they will follow sequentially
        });
      }
    });

    return () => {
      tl.kill(); // This ensures to kill the timeline and all its animations on cleanup
    };
}, [linkRefs]);   // Dependency array includes navOpen to re-trigger animations on open/close

  const addToRefs = (el) => {
    if (el && !linkRefs.current.includes(el)) {
      linkRefs.current.push(el);
    }
  };



  return (
    <>
      <nav id="navbar" className={`
        ${navOpen ? " !right-[0px]" : "" }
        fixed top-0 right-[-440px] w-full h-[100vh] lg:relative lg:right-0 lg:w-auto lg:h-auto
        flex-col lg:flex-row bg-[#fffffffa] text-[--primary] px-8 py-10 lg:p-0 lg:text-black lg:bg-transparent
        flex gap-8 transition-all z-20 `+className}>
        {routeData.map((z) => (
        <Link
          ref={addToRefs}
          key={z.path}
          href={z.path}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-bold navbar-topics" : ""
          }
        >
          {z.name}
        </Link>
      ))}
      </nav>
    </>
  );
}

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const { logo } = useGlobalData();

  const handleClick = () => {
    setNavOpen(!navOpen);
  }

  useGSAP(()=>{
    gsap.fromTo('.logo-link',{
      opacity : 0
    },{opacity : 1,duration : 0.5})
  })

  return (
    <header className="
      py-8 bg-[#ffffffaa] backdrop-blur
       w-[100vw] fixed top-0 z-10">
      <div className="
        flex items-center justify-between gap-6
        relative lg:pl-36
        responsive-container">
        <Link href={logo.path} className="logo-link">
          <Image src={headerLogo} alt="ETHERWISE" />
       
        </Link>
        <Nav navOpen={navOpen} className="lg:flex" />

        <button onClick={handleClick} className={(navOpen && "hidden")+" flex lg:hidden"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className=" bi bi-list fill-black" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
          </svg>
        </button>

        <button onClick={handleClick} className={(navOpen ? "flex":"hidden")+" z-50"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-x fill-black" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
          </svg>
        </button>
        


        {/* <section className="
          flex gap-8 ml-auto
          text-[#3A9BDC] underline">
          <Link  href={"/contact"} className="">
            Contact Us
          </Link>
          <Link href={"/about"} className="">
            Learn More
          </Link>
        </section> */}
      </div>
    </header>
  );
}