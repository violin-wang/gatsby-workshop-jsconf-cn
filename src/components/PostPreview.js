import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledArticle = styled.article`
  border-bottom: 1px solid #ddd;
  margin-top: 12px;
  padding-bottom: 16px;

  &:first {
    margin-top: 16px;
  }
`;

const PostPreview = ({ post }) => (
  <StyledArticle>
    <h3>
      <Link to={`/${post.slug}/`}>{post.title}</Link>
    </h3>
    <p>{post.excerpt}</p>
    <Link to={`/${post.slug}/`}>阅读&rarr;</Link>
  </StyledArticle>
);

export default PostPreview;