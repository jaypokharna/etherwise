/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import Image from "next/image";
import client_globe from "/public/imgs/about/client_globe.png";

import Heading2 from "@/Components/Headings/heading2";

export default function Screen4({ content1="", content2="" }) {

    return (
        <div className="bg-[--grey] py-[3%] max-lg:py-[5%] lg:h-[100vh] ">
            <div className="
                flex flex-col justify-evenly
                bg-[url(/imgs/about/client_bg.svg)] bg-no-repeat bg-contain bg-center
                responsive-container lg:gap-8 gap-24 translate-y-14
                ">
                <div className="
                    flex items-center justify-center
                    h-max
                    ">
                    <Heading2 className="items-center md:w-1/3 text-center text" 
                        content1={content1} content2={content2} />
                </div>
                <div className="
                    flex items-center justify-center gap-8
                    h-max
                    ">
                    <Image src={client_globe} />
                </div>
            </div>
        </div>
    );
}
