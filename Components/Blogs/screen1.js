/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
"use client";

import BlogCard from "@/Components/Cards/blog_card";

export default function Screen1({
  content1 = "",
  content2 = "",
  content3 = "",
  cards = [],
}) {
  return (
    <div
      className=" 
        grid place-items-center grid-rows-* md:grid-rows-* pt-24
        responsive-container min-h-[100vh]"
    >
      <div
        className="
                flex flex-col items-center justify-center max-lg:gap-1 gap-4
                h-[42vh] px-2 self-end 
                text-center w-[100%] mb-5"
      >
        <img
          src="/imgs/blogs/head_bg.png"
          alt=""
          className="absolute h-[45%]"
        />
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
        <section className="mb-4">
          <p>
            Discover insights and innovations in automation and AI. <br></br>
            Our expert-driven content helps you stay informed and ahead in the
            rapidly evolving tech landscape.
          </p>
        </section>
      </div>
      <div
        className="
                grid grid-cols-3 gap-6 mt-5  p-4 min-h-[100vh]
                  overflow-hidden mx-auto max-lg:flex max-lg:flex-col
                "
      >
        {cards.map((z, i) => {
          return (
            <BlogCard
              key={i}
              {...z}
              color={`${i % 2 === 0 ? "bg-white" : "bg-white"}`}
            />
          );
        })}
      </div>
      {/* <section className="
                bg-[url(/imgs/home/btn_bg.svg)] bg-no-repeat bg-contain bg-left
                ">
                <a href="/blogs" className="
                    grid place-items-center
                    text-white p-8
                    ">
                    Learn More
                </a>
            </section> */}
    </div>
  );
}
