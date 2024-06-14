/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

export default function NormalCard({ heading="", content="", className="", headingClassName="" }) {

    return (
		<div className={`
            flex flex-col
            items-start
            rounded-xl px-6 py-10
            h-[47%] w-full2
            bg-[--dark]
            ${className}`}>
             <i className="
                grid place-items-center
                rounded-full w-1/5
                p-3 aspect-square
                text-white mb-4
                gradient-bg
                ">s</i>
             <span className={`text-white text-2xl mt-6 mb-2 `+headingClassName}>
                {heading}
             </span> 
             <p className="
                pr-4
                font-stretched text-slate-400 text-lg">
                {content}
             </p>
        </div>
	);
}
