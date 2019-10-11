const path = require("path");
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "/gatsby-workshop-jsconf-cn",
  siteMetadata: {
    title: "Gatsby Workshop",
    description: "A site we built together during Gatsby workshop!",
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-styled-components",
      options: {},
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: path.resolve("./src/components/Layout.js"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
          },
        ],
        plugins: [
          {
            resolve: "gatsby-remark-images",
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "posts",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "images",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: "data",
      },
    },
    "gatsby-transformer-json",
    {
      resolve: "gatsby-plugin-remote-images",
      options: {
        nodeType: "BuildingsJson",
        imagePath: "image",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby Workshop",
        short_name: "GatsbyJS",
        short_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        display: "standalone",
        icon: "images/icon.png",
      },
    },
    "gatsby-plugin-offline",
  ],
};
