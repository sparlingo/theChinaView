module.exports = {
  pathPrefix: `/gatsby-starter-hyperspace/`, // This path is subpath of your hosting https://domain/portfolio
  siteMetadata: {
    title: 'the China View',
    author: 'Kevin Sparling'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-remark`,
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Hyperspace',
        short_name: 'starter',
        start_url: '/',
        background_color: '#50C878',
        theme_color: '#50C878',
        display: 'standalone',
        icon: 'src/assets/img/website-icon.png'
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/chapters`,
        name: `chapters`
      }
    }
  ]
};
