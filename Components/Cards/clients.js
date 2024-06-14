/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import Image from "next/image";

export default function ClientsCard({ heading="", content="", className="", headingClassName="",link="" }) {

    return (
		<div className={`
            flex flex-col
            items-start
            rounded-xl px-6 py-10
            h-[300px] w-full
            bg-[--dark] max-lg:h-fit
            ${className}`}>
            <img src={link || "https://api.dicebear.com/8.x/icons/svg?size=100"} className="
               place-items-center
               rounded-full h-[40%]
               text-white mb-4
               gradient-bg max-lg:hidden
               "/>
            <span className={`text-white text-2xl mt-6 mb-2 max-lg:m-0 `+headingClassName}>
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
