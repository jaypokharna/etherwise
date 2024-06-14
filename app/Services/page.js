/* eslint-disable no-unused-vars */
'use client'

import Layout from '@/Components/layout';
import Screen1 from '@/Components/Services/screen1';
import Screen2 from '@/Components/Services/screen2';
import Screen3 from '@/Components/Services/screen3';

import { useServicesData } from "@/Hooks/services_data";

export default function Services() {
    const data = useServicesData();

    return (
        <Layout>
            <Screen1 {...data[0]} />
            {/* <Screen2 {...data[1]} /> */}
            {/* <Screen3 {...data[2]} /> */}
        </Layout>
    );
}
