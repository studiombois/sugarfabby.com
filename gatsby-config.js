module.exports = {
  siteMetadata: {
    title: 'Fabian Lee | Software Engineer from Hong Kong',
    author: 'Fabian Lee',
    email: 'chleefabian@gmail.com',
    description:
      'Software Engineer from Hong Kong with focus on Front-end Development and Human-centered Design.',
    siteUrl: 'https://sugarfabby.com/',
    blogUrl: 'https://blog.sugarfabby.com/',
    socialMedia: [
      { link: 'https://github.com/fabianlee1211', platform: 'github' },
      {
        link: 'https://www.linkedin.com/in/fabiannnlee/',
        platform: 'linkedin',
      },
      { link: 'https://twitter.com/fabiannnlee', platform: 'twitter' },
      { link: 'https://www.behance.net/fabianlee', platform: 'behance' },
      { link: 'https://medium.com/@fabianlee', platform: 'medium' },
    ],
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': `${__dirname}/src/components`,
          '@assets': `${__dirname}/src/assets`,
          '@hooks': `${__dirname}/src/hooks`,
          '@context': `${__dirname}/src/context`,
          '@lib': `${__dirname}/src/lib`,
        },
        extensions: ['js', 'scss'],
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `blog`,
    //     path: `${__dirname}/src/pages/blog`,
    //   },
    // },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Inter:100,200,300,400,500,600,700,800'],
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS,
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
      },
    },
  ],
};
