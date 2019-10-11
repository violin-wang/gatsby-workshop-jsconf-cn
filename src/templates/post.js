import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql, Link } from "gatsby";

import Layout from "../components/Layout";

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <h1>{post.frontmatter.title}</h1>
    <p>{post.frontmatter.author} 发布</p>
    <MDXRenderer>{post.body}</MDXRenderer>
    <Link to="/">&larr;回到首页</Link>
  </Layout>
);

export default PostTemplate;
