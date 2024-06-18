/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { BsFillStarFill } from "react-icons/bs";
import headingLogo from "/public/imgs/heading-logo.svg";
import Image from "next/image";


export default function BgMaskCard({ name="", designation="", content="" }) {

    return (
		<div className={`
            flex flex-col gap-6
            items-start h-full
            rounded-xl px-8 py-10 lg:min-h-[398px] w-full max-lg:h-fit
            bg-white border-2 lg:relative z-[1]`}>
            <section className="flex items-center text-yellow-500">
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
            </section>
            <p className="
                text-slate-600 text-lg text-justify lg:h-[64%] lg:pb-20  overflow-hidden">
                {content}
            </p>
           <section className="flex items-center gap-2 lg:absolute lg:bottom-8"> {/* Name/Designation/Logo */}
             <Image src={headingLogo} className="
                    grid place-items-center
                    rounded-full lg:w-14
                    p-2 aspect-square
                    text-white bg-slate-300"/>
                <section className="flex flex-col">
                    <strong className="text-[--primary]">{name}</strong>
                    <span className="text-sm font-stretched text-slate-500">{designation}</span>
                </section>{/* Name/Designation/Logo */}
            </section>
        </div>
	);
}
