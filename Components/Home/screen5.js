/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
"use client";

import Heading2 from "@/Components/Headings/heading2";
import TestimonialCard from "@/Components/Cards/testimonial";
import card_bg from "../../public/imgs/cards/card_bg.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import './css/style.css'

export default function Screen5({ content1 = "", content2 = "", cards = [] }) {

	function SampleNextArrow(props) {
		const { className, style, onClick } = props;
		return(
		  <div onClick={onClick} className={`arrow ${className}`} >
			<AiOutlineArrowRight class="arrows" style={{color:"black"}}/>
		  </div>
		)
	  }
	  
	  const SamplePrevArrow = (props) => {
		const { className, style, onClick } = props;
		return(
		  <div onClick={onClick} className={`arrow ${className}`} >
			<AiOutlineArrowLeft class="arrows" style={{color:"black"}}/>
		  </div>
		)
		}

	  const options = {
		dots : true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />
	}
	  

  return (
    <div
      className="
            flex flex-col justify-center 
            responsive-container h-fit max-lg:py-6 lg:h-screen 
            "
    >
      <div
        className=" heading-part
				flex max-lg:items-center items-center justify-center h-[20%]
				max-lg:h-full max-lg:mb-4 sm:mb-0 
				"
      >
        <Heading2
          className="items-center text-center"
          content1={content1}
          content2={content2}
        />
      </div>

      <div
        className="testimonial-cards  h-[50%]
				flex gap-9 flex-col  justify-center
				max-lg:h-full max-lg:pt-6 max-lg:my-2  ">
					<div className="h-full py-[2%]">

        <Slider {...options} className="h-full">
          {cards.map((z, i) => (
			  <TestimonialCard
              key={i}
              {...z}
              className={`bg-[url(/imgs/cards/card_bg.png)] bg-no-repeat bg-contain bg-center `}
			  />
			))}
        </Slider>
			</div>

      </div>
    </div>
  );
}
