/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { BsFillStarFill } from "react-icons/bs";
import headingLogo from "/public/imgs/heading-logo.svg";
import Image from "next/image";


export default function TestimonialCard({ name="", designation="", content="" }) {

    return (
		<div className="
            flex flex-col gap-6
            items-start
            rounded-xl px-8 py-8
            h-fit w-full max-lg:h-fit
            shadow-2xl shadow-slate-200
            bg-white border-2 lg:relative z-[1]">
            <section className="flex items-center text-yellow-500">
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
            </section>
            <p className="
                text-slate-600 text-lg">
                {content}
            </p>
           <section className="flex items-center gap-2 lg:relative lg:bottom-0"> {/* Name/Designation/Logo */}
             <Image src={headingLogo} className="
                    grid place-items-center
                    rounded-full 
                    p-2 aspect-square
                    text-white bg-slate-300" />
                <section className="flex flex-col">
                    <strong className="text-[--primary]">{name}</strong>
                    <span className="text-sm font-stretched text-slate-500">{designation}</span>
                </section>{/* Name/Designation/Logo */}
            </section>
        </div>
	);
}
