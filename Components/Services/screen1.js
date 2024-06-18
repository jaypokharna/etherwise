/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
'use client'

import NormalCard from "@/Components/Cards/normal";
import ServiceCard from "@/Components/Cards/service_card";

export default function Screen1({ content1="", content2="", content3="", cards=[] }) {
// bg-[url(/imgs/services/head_bg.svg)]
    return (
        <div className=" 
        grid place-items-center grid-rows-* md:grid-rows-* pt-24
        responsive-container 
            ">
            <div className="
               flex flex-col items-center justify-center max-lg:gap-1 gap-4
               h-[38vh] px-2 self-end 
               text-center w-[90%] mb-2">
                    <img src="/imgs/services/head_bg.svg" alt=""  className="absolute"/>
                    <section className="
                        py-2 lg:mt-6 px-6 rounded-[20px]
                        gradient-bg text-white
                        ">
                        <p>
                            {content1}
                        </p>
                    </section>
                    <section className="
                        py-2
                        text-4xl xl:text-5xl font-stretched
                        ">
                        <h1 className="my-1 font-bold">
                            {content2}
                        </h1>
                    </section>
                    <section className="mb-4">
                        <p>
                        Etherwise helps you unify your brand identity by collecting, storing and
                        <br /> distributing design tokens and assets — automatically.
                        </p>
                    </section>
            </div>
            <div className="
            mt-5
                row-span-2
                grid grid-container--full gap-6
                h-fit overflow-auto grid-cols-3 max-lg:flex max-lg:flex-col 
                ">
                    {
                        cards.map((z, i) => <ServiceCard key={i} {...z}
                            className=" bg-[url(/imgs/cards/card_bg.png)] bg-no-repeat bg-contain bg-center" />)
                    }
                   
            </div>
        </div>
    );
}
