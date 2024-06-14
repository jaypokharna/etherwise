'use client'

import Layout from '@/Components/layout';

import Screen1 from '@/Components/Blogs/screen1';
// import Screen2 from './screen2';
// import Screen3 from './screen3';

import { useBlogsData } from "@/Hooks/blogs_data";

export default function Blogs() {
    const data = useBlogsData();

    return (
        <Layout>
            <Screen1 {...data[0]} />
            {/* <Screen2 {...data[1]} />
            <Screen3 {...data[2]} /> */}
        </Layout>
    );
}
