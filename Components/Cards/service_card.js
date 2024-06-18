/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import Image from "next/image";

export default function ServiceCard({ heading="", content="", className="", headingClassName="",link="" }) {

    return (
		<div className={`
            flex flex-col
            items-start
            rounded-xl px-6 py-10
            lg:h-full h-[450px] w-full
            bg-[--dark]
            ${className}`}>
           <div className="place-items-center justify-center
                p-3 w-[20%]  rounded-full border-2 border-opacity-30  border-blue-500 ">
           <img src={link || "/imgs/icons/icons/AutomationPersonalized.png"} className="text-white  h-full "/>
           </div>
            <span className={`text-white text-2xl mt-6 mb-2 `+headingClassName}>
               {heading}
            </span>
            <p className="  text-left
               font-stretched text-slate-400 text-lg h-fit">
               {content}
            </p>
        </div>
	);
}
