/* eslint-disable no-undef */
const path = require('path');

function createBlogPages({ posts, actions, blogPath }) {
  const { createPage } = actions;

  posts.forEach(({ node }, index) => {
    // Gets the previous and next blog post
    const prev = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;
    // Sometimes fails to get the slug from fields
    const pagePath =
      (node.fields && node.fields.slug) ||
      `${blogPath}/${node.frontmatter.slug}`;

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

exports.createPages = ({ graphql, actions }) => {
  // Need to move MDX pages outside of pages folder to prevent creating duplicates
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        query {
          blog: allMdx(
            filter: {
              fileAbsolutePath: { regex: "//content/blog//" }
              frontmatter: { published: { eq: true } }
            }
            sort: { order: DESC, fields: [frontmatter___date] }
          ) {
            edges {
              node {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
            }
          }
        }
      `).then(({ data, errors }) => {
        if (errors) {
          reject(errors);
          return;
        }

        const { edges } = data.blog;

        if (!edges.length) {
          reject('There are no posts');
          return;
        }

        createBlogPages({ posts: edges, blogPath: '/blog', actions });
      }),
    );
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const parentNode = getNode(node.parent);
  const { createNodeField } = actions;

  if (
    node.internal.type === `Mdx` &&
    parentNode.sourceInstanceName === 'blog'
  ) {
    let slug = node.frontmatter.slug;
    // Windows system uses backlashes for directory names
    const parsedDirPath = __dirname.replace(/\\/g, '/');

    if (node.fileAbsolutePath.includes('content/blog/')) {
      slug = `/blog/${node.frontmatter.slug}`;
    }

    createNodeField({
      name: 'slug',
      node,
      value: slug,
    });

    createNodeField({
      name: 'editLink',
      node,
      value: `https://github.com/fabianlee1211/sugarfabby.com/edit/master${node.fileAbsolutePath.replace(
        parsedDirPath,
        '',
      )}`,
    });
  }
};

// // This little algo takes the array of posts and groups
// // them based on this `size`:
// let size = 5;
// let start = 0;
// // Premake the grouped array to the correct length. new Array
// // wasn't working with map so don't @ me :)
// let groupedPosts = Array.from(Array(Math.ceil(posts.length / size)));
// groupedPosts = groupedPosts.map(() => {
//   const group = posts.slice(start, start + size);
//   start += size;
//   return group;
// });

// // Here's the basic idea of what the grouping is doing if the
// // size variable was 2:
// // posts: [post1, post2, post3]
// // groupedPosts: [[post1, post2], [post3]]

// groupedPosts.forEach((group, index) => {
//   const page = index + 1;
//   createPage({
//     path: `/blog/${page}`,
//     component: path.resolve('./src/components/browse-blog-posts.js'),
//     context: { groupedPosts, group, page },
//   });
// });
