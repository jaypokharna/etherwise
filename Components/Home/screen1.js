/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
'use client'

import customersImg from "/public/imgs/home/customers.png";
import BasicContainer from "../Container/index";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./css/style.css";
import Image from "next/image";

export default function Screen1({ content1 = "" }) {
  const imageRef = useRef(null);

  useEffect(() => {

    const tl = gsap.timeline({ repeat: -1 });
    const ml = gsap.timeline({ repeat: -1 });

    for (let i = 1; i <= 12; i++) {
      tl.to('.image1,.image3', {
        rotate: i * 30,
        delay: 1, // No delay for the first rotation, 1 second delay for subsequent rotations
      });
    }

	for (let i = 1; i <= 12; i++) {
		ml.to('.image2', {
		rotate: -i * 30,
		delay: 1, // No delay for the first rotation, 1 second delay for subsequent rotations
		});
	}
  
	}, []);

  useGSAP(() => {
    gsap.from(".maindiv", {
      opacity: 0,
      duration: 0.7,
    });
  });

  // bg-[url(/imgs/home/screen1.svg)

  return (
    <BasicContainer
      className=" 
			grid place-items-center 
             bg-no-repeat max-lg:bg-[length:1500px_550px] bg-contain bg-center lg:bg-bottom xl:mt-8 "
    >
      <img   
        src="/imgs/home/circle2.png"
        alt=""
        className="image1 circle-anim absolute animate-rotate2 h-[80%] max-lg:hidden delay-0"
      />
      <img
        src="/imgs/home/circle2.png"
        alt=""
        className="image2 circle-anim absolute animate-rotate2 h-[70%] max-lg:hidden delay-1"
      />
      <img
        src="/imgs/home/circle2.png"
        alt=""
        className="image3 circle-anim absolute animate-rotate2 h-[60%] max-lg:hidden delay-2"
      />

      <img
        src="/imgs/home/circle2.png"
        alt=""
      
        className="image1 circle-anim absolute z-[-1] mx-auto animate-rotate2 w-[90%] lg:hidden delay-0"
      />
      <img
        src="/imgs/home/circle2.png"
        alt=""
        className="image2 circle-anim absolute z-[-1] mx-auto animate-rotate2 w-[75%] lg:hidden delay-1"
      />
      <img
        src="/imgs/home/circle2.png"
        alt=""
        className="image3 circle-anim absolute z-[-1] mx-auto animate-rotate2 w-[60%] lg:hidden delay-2"
      />

      <div className="flex maindiv flex-col items-center justify-center w-[70%] lg:w-1/2 xl:w-1/4 h-max px-2 pt-12 text-center responsive-container">
        {/* <section className="
						py-2 px-3 rounded-[20px]
						 gradient-bg text-white
						">
						<p>
							{content1}
						</p>
					</section> */}
        <section
          className="
						py-2
					 xl:text-4xl 2xl:text-5xl 3xl:text-6xl
						"
        >
          <h1 className="my-1">
            <span className="roboto-bold">Etherwise </span>
            <span className="roboto-regular">
              Pioneering Tech Solutions for{" "}
            </span>
            <span className="roboto-bold">Modern Challenges</span>
          </h1>
        </section>
        <section className="mb-4">
          <p>
            Automate. Enhance. Excel. With{" "}
            <span className="roboto-medium">Etherwise</span>
          </p>
        </section>
        <section className="text-sm">
          <p>Happy Customers</p>
          <strong className="font-extrabold">2340+</strong>
          <img className="mx-auto w-[70%]" src={customersImg} alt="" />
        </section>
      </div>
    </BasicContainer>
  );
}
