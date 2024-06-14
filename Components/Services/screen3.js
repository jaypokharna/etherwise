/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
'use client'

import BasicContainer from "@/Components/Container";
import BlogCard from "@/Components/Cards/blog_card";

export default function Screen3({ content2="", content3="", cards=[] }) {

    return (
        <div className="bg-[--grey]">
            <BasicContainer className="
                grid place-items-center
                responsive-container py-6 lg:p-0
                ">
                <div className="
                    flex flex-col items-center gap-4
                    h-max px-2 self-end
                    text-center">
                        {/* <section className="
                            py-2 px-6 rounded-[20px]
                            gradient-bg text-white
                            ">
                            <p>
                                {content1}
                            </p>
                        </section> */}
                        <section className="
                            py-2
                            text-5xl font-stretched
                            ">
                            <h1 className="my-1 font-bold">
                                {content2}
                            </h1>
                        </section>
                        <section className="mb-4">
                            <p>
                                {content3}
                            </p>
                        </section>
                </div>
                <div className="
                    grid grid-container--fit gap-x-6
                    h-full row-span-2 overflow-auto
                    ">
                    {
                        cards.map((z, i) => <BlogCard key={i} {...z}
                            className="" />)
                    }
                </div>
                {/* <section className="
                    bg-[url(/imgs/home/btn_bg.svg)] bg-no-repeat bg-contain bg-left
                    ">
                    <a href="/blogs" className="
                        grid place-items-center
                        text-white p-8
                        ">
                        Learn More
                    </a>
                </section> */}
            </BasicContainer>
        </div>
    );
}
