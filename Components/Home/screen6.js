/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
'use client'

import BasicContainer from "@/Components/Container";
import Heading2 from "@/Components/Headings/heading2";
import FaqCard from "@/Components/Cards/faqs";

export default function Screen6({ content1="", content2="", cards=[] }) {

    return (
		<BasicContainer className="
            flex justify-center lg:justify-between items-center flex-col lg:flex-row
            responsive-container
            ">
			<div className="
    			flex flex-col
				h-max w-full lg:w-1/2
				">
                <Heading2 className="" 
                        content1={content1} content2={content2} />
			</div>
            <div className="
				w-full lg:w-1/2">
                {
                    cards.map((z, i) => {
                        let hr = "";
                        if (i < cards.length-1) hr = <hr />;
                        return (
                            <section key={i}>
                                <FaqCard {...z} />
                                {hr}
                            </section>
                        )
                    })
                }
			</div>
		</BasicContainer>
	);
}
