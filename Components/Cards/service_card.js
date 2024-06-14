/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import Image from "next/image";

export default function ServiceCard({ heading="", content="", className="", headingClassName="",link="" }) {

    return (
		<div className={`
            flex flex-col
            items-start
            rounded-xl px-6 py-10
            lg:h-[450px] h-[450px] w-full
            bg-[--dark]
            ${className}`}>
            <img src={link || "https://api.dicebear.com/8.x/icons/svg?size=100"} className="
               place-items-center
               rounded-full h-[25%]
               text-white mb-4
               gradient-bg
               "/>
            <span className={`text-white text-2xl mt-6 mb-2 `+headingClassName}>
               {heading}
            </span>
            <p className="
               overflow-hidden
               font-stretched text-slate-400 text-lg h-[50%]">
               {content}
            </p>
        </div>
	);
}
