/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Nnamdi Awurumibe | Software Engineer, Web`,
    author: `Nnamdi Awurumibe`,
    description: `With 7+ years of experience in various web technologies, I help tech
              startups from idea phase to high volumes. I design and build
              scalable solutions.`,
    siteUrl: `https://nnamdisensei.com/`,
    social: {
      twitter: `nnamdisensei`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nnamdi Awurumibe | Software Engineer, Web`,
        short_name: `Nnamdi A.`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#0000FF`,
        display: `standalone`,
        icon: 'static/profile.jpeg'
      },
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    'gatsby-plugin-netlify-cms',
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        tailwind: true, // Enable tailwindcss support
      }
    }
  ],
}
