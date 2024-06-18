/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
'use client'

import Image from "next/image";

export default function NormalCard({ heading="", content="", className="", headingClassName="",link="" }) {

    return (
		<div className={`
            flex flex-col
            items-start
            rounded-xl px-6 py-10
            h-[360px] w-full
            bg-[--dark]
            ${className}`}>
           <div className="place-items-center justify-center
                p-3 h-[25%] rounded-full border-2 border-opacity-30  border-blue-500 ">
           <img src={link || "/imgs/icons/icons/AutomationPersonalized.png"} className="text-white mb-4 h-full "/>
           </div>
            <span className={`text-white text-2xl mt-6 mb-2 `+headingClassName}>
               {heading}
            </span>
            <p className=" text-left
               overflow-hidden
               font-stretched text-slate-400 text-lg h-[50%]">
               {content}
            </p>
        </div>
	);
}
