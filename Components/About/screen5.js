/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import Heading2 from "@/Components/Headings/heading2";
import NormalCard from "@/Components/Cards/normal";
import ServiceCard from "../Cards/service_card";

export default function Screen5({ content1="", content2="", cards=[] }) {

    return (
        <div className=" bg-[--grey] 
            flex flex-col justify-center
            responsive-container  gap-y-6 lg:gap-10  lg:p-0 max-lg:py-0 h-fit lg:h-screen
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
                overflow-auto h-max lg:mb-[4%]
                ">
                    {
                        cards.map((z, i) => <ServiceCard key={i} {...z}
                            className="bg-[url(/imgs/cards/card_bg.png)] bg-no-repeat bg-contain bg-center" />)
                    }
            </div>
        </div>
    );
}
