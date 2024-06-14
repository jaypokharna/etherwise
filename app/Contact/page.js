'use client'

import Layout from '@/Components/layout';

import Screen1 from '@/Components/Contact/screen1';
// import Screen2 from './screen2';

import { useContactData } from "@/Hooks/contact_data";

export default function Contact() {
	const data = useContactData();

	return (
		<Layout>
            <Screen1 {...data[0]} />
            {/* <Screen2 {...data[1]} /> */}
		</Layout>
	);
}
