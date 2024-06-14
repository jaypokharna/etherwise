/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import Heading2 from "@/Components/Headings/heading2";
import ClientsCard from "../Cards/clients";

export default function Screen3({ content1="", content2="", cards=[] }) {

    return (
        <div className="
      flex flex-col gap-y-6 lg:gap-10
            responsive-container py-2 max-lg:py-0 lg:py-[4%]  lg:h-screen lg:justify-center
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
                overflow-auto h-max 
                ">
                    {
                        cards.map((z, i) => <ClientsCard key={i} {...z}
                            headingClassName="font-semibold font-stretched text-5xl"
                            className="bg-[url(/imgs/cards/card_bg.png)] bg-no-repeat bg-contain bg-center" />)
                    }
            </div>
        </div>
    );
}
