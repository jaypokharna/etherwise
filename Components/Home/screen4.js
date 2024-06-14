/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
'use client'

import Heading2 from "@/Components/Headings/heading2";
import ServiceCard from "../Cards/service_card";

export default function Screen4({ content1="", content2="", cards=[] }) {

    return (
        <div className="
            flex flex-col justify-center items-center text-center
            lg:gap-10 gap-5 px-[5%]  mx-auto   bg-[--grey] lg:h-[100vh] max-lg:py-6
            ">
            <div className="
                max-lg:flex items-center justify-center
               max-lg:mb-9 sm:mb-0 
                ">
                <Heading2 className="items-center" 
                        content1={content1} content2={content2} />
            </div>
            <div className="
               flex gap-6 max-lg:flex-col  justify-center  
                ">
                    {
                        cards.map((z, i) => <ServiceCard key={i} {...z}
                            className="bg-[url(/imgs/cards/card_bg.png)] bg-no-repeat bg-contain bg-center" />)
                    }
            </div>
        </div>
    );
}
