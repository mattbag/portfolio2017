module.exports = {
  // pathPrefix: `/portfolio2017`,
  pathPrefix: `/`,
  siteMetadata: {
    title: `Matt Bagni`,
    description: `a Progressive Front-end dev`
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `u3ganegr6z7z`,
        accessToken: `06249f5b147d5f6f0f7c31545407c3fe0a08075b558632f850ea1a7a9280a6fe`,
      },
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-next`,
    `gatsby-plugin-offline`,
  ],
}
