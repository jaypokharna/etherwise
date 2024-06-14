/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import Image from "next/image";
import visionImage from "/public/imgs/about/screen4.png";

import Heading2 from "@/Components/Headings/heading2";

export default function Screen2({ content1="", content2="", content3="" }) {

    return (
        <div className="bg-[--grey] max-lg:pt-[5%] lg:h-[100vh] lg:flex items-center justify-center">
             
            <div className="
                flex max-lg:flex-col justify-between items-center
                 px-[5%] py-[5%] max-lg:pt-0
                ">
                    <Heading2
                        className="w-full items-center lg:hidden"
                        content1={content1}
                        content2={content2}
                        /> 

                <div className="
                    flex flex-col
                    h-full w-1/2 max-lg:w-full
                    ">
                        
                    <Heading2
                        className="w-full max-lg:hidden"
                        content1={content1}
                        content2={content2}
                        />

                    <section className="my-8 w-full text-justify">
                        <p className="text-base w-full xl:text-xl text-slate-500">
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
                        <Image src={visionImage} className=" w-[90%] lg:translate-x-10 scale-x-[-1]" />
                </div>
            </div>
        </div>
	);
}
