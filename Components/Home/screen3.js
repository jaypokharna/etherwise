/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
'use client'

import Image from "next/image";
import visionImage from "/public/imgs/home/screen4.png";

import Heading2 from "@/Components/Headings/heading2";

export default function Screen3({ content1="", content2="", content3="" }) {

    return (
		<div className="
            flex lg:justify-between items-center md:flex-row flex-col
            responsive-container max-lg:py-6 lg:h-[100vh] 
            ">
			<div className="
    			flex flex-col
				h-max md:w-1/2 
				">
                <Heading2 className="max-lg:items-center" 
                        content1={content1} content2={content2} />
                
                <section className="my-8">
                    <p className="text-base xl:text-xl text-slate-500 max-lg:text-justify">
                        {content3}
                    </p>
                </section>
                <section className="p-2
                    bg-[url(/imgs/home/btn_bg.svg)] bg-no-repeat bg-contain bg-left
                    ">
                    <button className="
                        grid place-items-center
                        text-white pl-8
                        ">
                        Learn More
                    </button>
                </section>
			</div>
            <div className="w-1/2 flex  items-center justify-center
                    ">
                        <Image src={visionImage} className=" w-[90%] max-lg:w-full lg:translate-x-10 scale-x-[-1]" />
                </div>
		</div>
	);
}
