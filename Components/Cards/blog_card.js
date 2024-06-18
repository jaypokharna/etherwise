/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
'use client'

import Image from "next/image";
import Link from "next/link";
import { BiCalendar } from "react-icons/bi";
// import { Link, NavLink } from "react-router-dom";

export default function BlogCard({ img="", date="", heading="", content="", link="", className="" , color , key}) {

    const possibleColors = ["bg-red-400","bg-blue-400"]

    return (
		<div className={`
            flex flex-col gap-2
            rounded-xl p-6
            h-full w-full
             ${color} text-white shadow-xl shadow-slate-200 border 
            ${className}`}>
            
            <img src={`${img}`} className="rounded-xl mb-2 h-1/2 cursor-pointer border-white border-2 border-opacity-30" />

            <section className="flex items-center gap-2">
                <BiCalendar className="text-xl text-white" />
                <span className="
                    text-white font-light
                    ">
                    {date}
                </span>
            </section>
            
            <strong className={`text-2xl overflow-hidden font-semibold `}>
               {heading}
            </strong>
            <p className="
                overflow-hidden font-light
               text-white pb-2">
               {content}
            </p>
            {/* <a href={link} className="text-blue-600 mt-auto cursor-pointer" target="_blank">Learn more</a> */}
            {/* <Link to={`/blogs/${heading}`} className="text-blue-600 mt-auto cursor-pointer">Learn more</Link> */}
            <Link href={`/Blogs/${heading}`} className={` ${key%2 === 0 ? 'text-white' : 'text-blue-600'} mt-auto cursor-pointer`}>Learn More...</Link>
        </div>
	);
}
