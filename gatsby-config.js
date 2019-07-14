/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Fabian Lee | Software Engineer from Hong Kong',
    author: 'Fabian Lee',
    email: 'chleefabian@gmail.com',
    description: 'Software Engineer from Hong Kong with focus on Front-end Development and Human-centered Design.',
    siteUrl: 'https://sugarfabby.com/',
    socialMedia: [
      { link: 'https://github.com/fabianlee1211', platform: 'github' },
      { link: 'https://www.linkedin.com/in/fabiannnlee/', platform: 'linkedin' },
      { link: 'https://www.behance.net/fabianlee', platform: 'behance' },
    ]
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`300`, `400`, `700`]
          },
          {
            family: `Roboto Slab`,
            variants: [`400`, `700`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      }
    }
  ]
}
