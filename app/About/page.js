'use client'
import Layout from '@/Components/layout';

import Screen1 from '@/Components/About/screen1';
import Screen2 from '@/Components/About/screen2';
import Screen3 from '@/Components/About/screen3';
import Screen4 from '@/Components/About/screen4';
import Screen5 from '@/Components/About/screen5';
import Screen6 from '@/Components/About/screen6';

import { useAboutData } from "@/Hooks/about_data";
import { useHomeData } from '@/Hooks/home_data';

export default function About() {
	const data = useAboutData();
      const homeData = useHomeData()

	return (
		<Layout>
            <Screen1 {...data[0]} />
            <Screen2 {...data[1]} />
            {/* <Screen3 {...data[2]} /> */}
            <Screen4 {...data[3]} />
            <Screen5 {...data[4]} />
            <Screen6 {...homeData[4]} />
		</Layout>
	);
}
