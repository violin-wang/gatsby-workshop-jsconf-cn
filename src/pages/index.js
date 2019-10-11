import React from "react";

import Layout from "../components/Layout";
import PostPreview from "../components/PostPreview";
import usePosts from "../hooks/usePosts";
import Banner from '../components/Banner';

export default () => {
  const posts = usePosts();
  return (
    <>
      <Banner />
      <Layout>
        <h2>我的博客</h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </Layout>
    </>
  );
};
