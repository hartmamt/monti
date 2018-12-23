const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulService {
          edges {
            node {
              slug
            }
          }
        }
        allContentfulLocation {
          edges {
            node {
              slug
            }
          }
        }
        allContentfulNews {
          edges {
            node {
              slug
            }
          }
        }
        allContentfulEquipmentList {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulService.edges.forEach(({ node }) => {
        createPage({
          path: "services/" + node.slug,
          component: path.resolve(`./src/templates/service.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.slug
          }
        });
      });
      result.data.allContentfulLocation.edges.forEach(({ node }) => {
        createPage({
          path: "locations/" + node.slug,
          component: path.resolve(`./src/templates/location.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.slug
          }
        });
      });
      result.data.allContentfulEquipmentList.edges.forEach(({ node }) => {
        createPage({
          path: "equipmentlist/" + node.slug,
          component: path.resolve(`./src/templates/equipmentList.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.slug
          }
        });
      });
      result.data.allContentfulNews.edges.forEach(({ node }) => {
        createPage({
          path: "news/" + node.slug,
          component: path.resolve(`./src/templates/newsArticle.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.slug
          }
        });
      });
      resolve();
    });
  });
};
