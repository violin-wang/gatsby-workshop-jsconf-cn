import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Image from "gatsby-image";

const StyledArticle = styled.article`
  border-bottom: 1px solid #ddd;
  margin-top: 12px;
  padding-bottom: 16px;
  display: flex;

  &:first {
    margin-top: 16px;
  }
`;

const ImageLink = styled(Link)`
  margin-right: 10px;
`;

const PostPreview = ({ post }) => (
  <StyledArticle>
    <ImageLink to={`/${post.slug}/`}>
      <Image fixed={post.image.sharp.fixed} />
    </ImageLink>
    <div>
      <h3>
        <Link to={`/${post.slug}/`}>{post.title}</Link>
      </h3>
      <p>{post.excerpt}</p>
      <Link to={`/${post.slug}/`}>阅读&rarr;</Link>
    </div>
  </StyledArticle>
);

export default PostPreview;
