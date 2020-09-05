/* eslint-disable no-undef */
const path = require('path');

function createBlogPages({ data, actions, blogPath }) {
  if (!data.edges.length) {
    throw new Error('There are no posts!');
  }

  const { edges } = data;
  const { createPage } = actions;

  edges.forEach(({ node }, i) => {
    // Gets the previous and next blog post
    const prev = i === 0 ? null : edges[i - 1].node;
    const next = i === edges.length - 1 ? null : edges[i + 1].node;
    const pagePath = `${blogPath}/${node.frontmatter.slug}`;

    createPage({
      path: pagePath,
      component: path.resolve(`./src/components/templates/Post.js`),
      context: {
        id: node.id,
        prev,
        next,
      },
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  // Need to move MDX pages outside of pages folder to prevent creating duplicates
  const { data, errors } = await graphql(`
    query {
      blog: allMdx(
        filter: {
          fileAbsolutePath: { regex: "//content/blog//" }
          frontmatter: { published: { eq: true } }
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  if (errors) {
    return errors;
  }

  const { blog } = data;

  createBlogPages({ blogPath: '/blog', data: blog, actions });
};

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions;
//   return graphql(`
//     query {
//       allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
//         edges {
//           node {
//             id
//             excerpt(pruneLength: 250)
//             frontmatter {
//               title
//               author
//             }
//           }
//         }
//       }
//     }
//   `).then((results, errors) => {
//     if (errors) return Promise.reject(errors);
//     const posts = results.data.allMdx.edges;

//     // This little algo takes the array of posts and groups
//     // them based on this `size`:
//     let size = 5;
//     let start = 0;
//     // Premake the grouped array to the correct length. new Array
//     // wasn't working with map so don't @ me :)
//     let groupedPosts = Array.from(Array(Math.ceil(posts.length / size)));
//     groupedPosts = groupedPosts.map(() => {
//       const group = posts.slice(start, start + size);
//       start += size;
//       return group;
//     });

//     // Here's the basic idea of what the grouping is doing if the
//     // size variable was 2:
//     // posts: [post1, post2, post3]
//     // groupedPosts: [[post1, post2], [post3]]

//     groupedPosts.forEach((group, index) => {
//       const page = index + 1;
//       createPage({
//         path: `/blog/${page}`,
//         component: path.resolve('./src/components/browse-blog-posts.js'),
//         context: { groupedPosts, group, page },
//       });
//     });
//   });
// };
