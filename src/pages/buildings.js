import React from "react";
import styled from "styled-components";
import { Card } from "@wework/ray-core-react";
import Image from "gatsby-image";

import Layout from "../components/Layout";
import useBuildings from "../hooks/useBuildings";

const BuildingsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const BuildingCardContainer = styled.div`
  flex-basis: 48%;
  margin-bottom: 10px;
`;

export default () => {
  const buildings = useBuildings();

  return (
    <Layout>
      <h2>WeWork 地点</h2>
      <BuildingsList>
        {buildings.map(({ slug, image, name }) => (
          <BuildingCardContainer key={slug}>
            <Card
              heading={
                <a href={`https://www.wework.cn/building/${slug}`}>{name}</a>
              }
              img={
                <Image
                  style={{ position: "absolute" }}
                  fixed={image.sharp.fixed}
                  alt={name}
                />
              }
            />
          </BuildingCardContainer>
        ))}
      </BuildingsList>
    </Layout>
  );
};
