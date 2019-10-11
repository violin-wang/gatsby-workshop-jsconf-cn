import React from "react";
import styled from 'styled-components';
import BackgroundImage from "gatsby-background-image";
import { useStaticQuery, graphql, Link } from "gatsby";

const ImageBackground = styled(BackgroundImage)`
  background-size: cover;
  height: 50vh;
  max-height: 380px;
`;

const TextContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
  justify-content: flex-end;
  padding: 0 calc((100vw - 600px) / 2) 32px;
  width: 100%;

  > h1 {
    font-size: 36px;
  }

  > p,
  > a {
    color: #222;
    margin-top: 0;
  }
  > a {
    margin-top: 8px;
  }
`;

const useBannerBackgroundImage = () =>
  useStaticQuery(graphql`
    {
      image: file(relativePath: { eq: "shanghai-ifc.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

const Banner = () => {
  const { image } = useBannerBackgroundImage();

  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextContainer>
        <h1>Gatsby Workshop</h1>
        <p>
          Hello Shanghai!<Link to="/about/">了解更多&rarr;</Link>
        </p>
      </TextContainer>
    </ImageBackground>
  );
};

export default Banner;
