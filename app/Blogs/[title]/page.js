/* eslint-disable no-unused-vars */
// /src/components/blog_details.js
'use client'

import Layout from '@/Components/layout';
import React from 'react';
import { useParams } from 'react-router-dom';
import Screen1 from '@/Components/BlogDetails/screen1';


const BlogDetails = (context) => {
  
  // const { blogName } = useParams();
  let {title} = context.params;
  title = decodeURIComponent(title)

return (
  <Layout>
      <Screen1 blogName={title} />
  </Layout>
);
};

export default BlogDetails;
