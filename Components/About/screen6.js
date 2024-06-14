/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import Heading2 from "@/Components/Headings/heading2";
// import TestimonialCard from "/src/components/cards/testimonial";
import TestimonialCard from "@/Components/Cards/about-testimonial";

export default function Screen6({ content1="", content2="", cards=[] }) {

    return (
		<div className="
            flex flex-col justify-center bg-[--grey] 
             gap-y-6 lg:gap-10 py-6 lg:p-0 max-lg:pb-0 lg:h-[100vh] z-[-10]
            ">
			<div className="
				flex items-center justify-center
				h-max
				">
                <Heading2 className="items-center" 
                        content1={content1} content2={content2} />
			</div>
            <div className="
				flex items-center gap-8 flex-col lg:flex-row
                overflow-auto h-max pb-9 px-5
				">
                    {
                        cards.map((z, i) => <TestimonialCard key={i} {...z}
                            className="bg-[url(/imgs/cards/card_bg.png)] bg-no-repeat bg-contain bg-center" />)
                    }
			</div>
		</div>
	);
}
