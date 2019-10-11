import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import PostPreview from "../components/PostPreview";
import usePosts from "../hooks/usePosts";

export default () => {
  const posts = usePosts();
  return (
    <Layout>
      <h1>首页</h1>
      <p>Hello Shanghai!</p>
      <Link to="/about/">关于我&rarr;</Link>

      <h2>我的博客</h2>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  );
};
