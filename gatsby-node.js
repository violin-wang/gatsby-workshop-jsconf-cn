const path = require("path");

const createPosts = async ({ actions, graphql }) => {
  const result = await graphql(`
    {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);
  const component = path.resolve("./src/templates/post.js");

  result.data.allMdx.nodes.forEach(({ frontmatter: { slug } }) => {
    actions.createPage({
      path: slug,
      component,
      context: {
        slug,
      },
    });
  });
};

exports.createPages = async options => {
  await createPosts(options);
};
