/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from "react";
// import { BsFillStarFill } from "react-icons/bs";
// import headingLogo from "/imgs/home/heading-logo.svg";

import { BsDashLg, BsPlusLg } from "react-icons/bs";


export default function FaqCard({ question="", content="" }) {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    return (
		<div className="
            flex flex-col gap-6
            items-start
            rounded-xl py-10
            h-full w-full
            bg-white">
            <section className="
                flex items-center justify-between
                w-full">
                <strong>
                    {question}
                </strong>
                <button className={
                    `text-2xl font-bold text-[--primary] ${(!open ? "hidden" : "")}`
                    }
                    onClick={handleClick}>
                    <BsDashLg />
                </button>
                <button className={
                    `text-2xl font-bold text-[--primary] ${(open ? "hidden": "")}`
                    }
                    onClick={handleClick}>
                    <BsPlusLg />
                </button>
            </section>
            <section className={`${(!open ? "hidden": "")}`}>
                <p className="text-slate-500">
                    {content}
                </p>
            </section>
        </div>
	);
}
