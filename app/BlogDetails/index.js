/* eslint-disable no-unused-vars */
// /src/components/blog_details.js
'use client'

import Layout from '@/Components/layout';
import React from 'react';
import { useParams } from 'react-router-dom';
import Screen1 from '@/Components/BlogDetails/screen1';


const BlogDetails = () => {
  
  const { blogName } = useParams();

return (
  <Layout>
      <Screen1 blogName={blogName} />
  </Layout>
);
};

export default BlogDetails;
