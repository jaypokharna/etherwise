/* eslint-disable react/prop-types */
import Image from "next/image";
import headingLogo from "/public/imgs/heading-logo.svg";

export default function Heading2({ className="", content1="", content2="" }) {
    return (
        <section className={`
            flex flex-col gap-2 items-start
            font-stretched
            `+className}>
            <section className="
                flex items-center gap-1
                text-[--primary] font-semibold
                ">
                <Image src={headingLogo} />
                <span>{content1}</span>
            </section>
            <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold">
                {content2}
            </h2>
        </section>
    )
}