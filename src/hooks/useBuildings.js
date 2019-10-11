import { useStaticQuery, graphql } from "gatsby";

const useBuildings = () => {
  const data = useStaticQuery(graphql`
    query {
      allBuildingsJson {
        nodes {
          slug
          name
          localImage {
            sharp: childImageSharp {
              fixed(width: 288, height: 162) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `);

  return data.allBuildingsJson.nodes.map(building => ({
    slug: building.slug,
    name: building.name,
    image: building.localImage,
  }));
};

export default useBuildings;
