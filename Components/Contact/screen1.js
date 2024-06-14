/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
// import NormalCard from "/src/components/cards/normal";
'use client'

import NormalCard from "@/Components/Cards/contact_card";


function InputField({ name="", required=true, placeholder="", type="", className="" }) {
    return (
        <section className={`
            ${className}
            flex flex-col`
            }>
            <strong>
                {name}
                {
                    required && "*"
                }
            </strong>
            <input className={`
                p-4 bg-transparent border-2 rounded-md
                `} type={type} placeholder={placeholder} />
        </section>
    );
}

export default function Screen1({ content1="", content2="", form="", content3="", content4="", content5="", content6="" }) {

    return (
        <div className="
            grid lg:place-items-center
         pt-24 mx-[5%] max-lg:mx-0 max-lg:w-[100vw] 
            ">
            <div className="
                flex justify-between gap-10
                border-2 p-10 pb-8
               max-lg:h-[100%] h-[84%] w-full bg-[--grey] rounded-xl max-lg:rounded-b-xl max-lg:rounded-t-none max-lg:flex-col
                ">
                <div className="
                    flex flex-col items-start max-lg:items-center
                    ">
                    <section className="
                        py-2 px-6 rounded-[20px]
                        gradient-bg text-white
                        ">
                        <p>
                            {content1}
                        </p>
                    </section>
                    <section className="
                        py-2
                        text-4xl xl:text-5xl font-stretched
                        ">
                        <h1 className="my-1 font-bold">
                            {content2}
                        </h1>
                    </section>

                    <section className="
                        flex flex-wrap justify-between gap-y-6
                        lg:my-8 max-lg:my-5 max-lg:flex-col w-full
                        ">
                        {
                            form.map((z, i) => <InputField key={i} {...z} className={(i > form.length-3) ? "w-full" : "w-[100%]"} />)
                        }
                    </section>

                    <section className="lg:p-2 
                        bg-[url(/imgs/home/btn_bg.svg)] bg-no-repeat bg-contain bg-left max-lg:flex items-center
                        ">
                        <button className="
                            grid place-items-center
                            text-white p-8
                            ">
                            Send message
                        </button>
                    </section>
                </div>
                <div className="
                    flex flex-col gap-8">
                    <NormalCard heading={content3} content={content4} />
                    <NormalCard heading={content5} content={content6} className="gradient-bg" />
                </div>
            </div>
            
        </div>
	);
}
