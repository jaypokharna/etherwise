/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import Image from "next/image";

import about_bg2 from "/public/imgs/about/about_bg2.png";

export default function Screen1({
  content1 = "",
  content2 = "",
  content3 = "",
}) {
  //  bg-[url(/imgs/about/about_bg2.svg)]
  return (
    <div
      className="
             place-items-center
            bg-no-repeat bg-cover bg-center  pt-20 max-lg:pt-24 pb-[2%] lg:h-[100vh] lg:flex lg:items-center lg:justify-center"
    >
      <Image src={about_bg2} className="z-[-1] absolute h-full" />
      <div
        className="
                flex flex-col items-center justify-start lg:pt-24 gap-1 lg:gap-4
                h-full px-2
                text-center responsive-container"
      >
        <section
          className="
                        py-2 px-6 rounded-[20px]
                        gradient-bg text-white
                        "
        >
          <p>{content1}</p>
        </section>
        <section
          className="
                        py-2
                        text-4xl xl:text-5xl font-stretched
                        "
        >
          <h1 className="my-1 font-bold">{content2}</h1>
        </section>
        <section className="mb-4 w-1/2 lg::w-1/3">
          <p className="">
            At Etherwise, we specialize in empowering businesses through
            advanced automation and AI-driven solutions. Our mission is to drive
            operational efficiency and innovation by providing tailored
            automation systems that evolve with your business needs. With a
            focus on personalized service and proactive support, we help
            companies stay ahead in a rapidly changing technological landscape.
          </p>
        </section>
        {/* <section className="text-sm">
                        <Image className="mx-auto w-[70%] 2xl:w-[80%]" src={customersImg} alt="" />
                    </section> */}
      </div>
    </div>
  );
}
