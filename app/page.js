/* eslint-disable no-unused-vars */
'use client'
import Layout from '@/Components/layout.js';

import Screen1 from '../Components/Home/screen1';
import Screen2 from '@/Components/Home/screen2';	
import Screen3 from '@/Components/Home/screen3';
import Screen4 from '@/Components/Home/screen4';
import Screen5 from '@/Components/Home/screen5';
import Screen6 from '@/Components/Home/screen6';

import { useHomeData } from "../Hooks/home_data";

export default function Home() {
	const data = useHomeData();

	return (
		<Layout>
      <Screen1 {...data[0]} /> {/* Main Heading Circle Part */}
			<Screen2 {...data[1]} /> {/* Why Choose Etherwise */}
			<Screen3 {...data[2]} /> {/* Our story/About us */}
			{/* <Screen4 {...data[3]} /> Services */}
			<Screen5 {...data[4]} /> {/* Testimonial */}
			{/* <Screen6 {...data[5]} /> */} {/*  */}
		</Layout>
	);
}
