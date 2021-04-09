/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `WebDev Porftolio`,
    description: `Awesome WebDev Portfolio built with Gatsby and Strapi`,
    titleTemplate: `%s | WebDev Portfolio`,
    url: "https://gatsby-strapi-portfolio-project.netlify.app",
    image: "/mainImg.png",
    twitterUsername: "@john_smilga",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`jobs`, `projects`],
        //If using single types place them in this array.
        singleTypes: [`about`],
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
