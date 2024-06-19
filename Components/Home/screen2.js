/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
'use client'

import Heading2 from "../Headings/heading2";
import NormalCard from "../Cards/normal";

export default function Screen2({ content1="", content2="", content3="", cards=[] }) {

    return (
		<div className="
            lg:flex lg:flex-col items-center justify-center
                gap-12 max-lg:py-6
             lg:px-16 max-lg:px-[5%] lg:h-[100vh] bg-[--grey] 
            ">
			<div className="
				flex items-center text-center justify-center flex-col
				">
                <Heading2 className="items-center" content1={content1} content2={content2} />

                {/* <section className="md:w-1/2 xl:w-1/3">
                    <p className="text-slate-500">
                        {content3}
                    </p>
                </section> */}
			</div>
            <div className="
				flex flex-col xl:flex-row items-start gap-8
				 overflow-auto mt-2 
				">
                    {
                        cards.map((z, i) => <NormalCard key={i} {...z} />)
                    }
			</div>
		</div>
	);
}
