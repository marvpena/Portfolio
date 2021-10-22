module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "marv adepena",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
      {
        resolve: "gatsby-plugin-page-progress",
        options: {
          // includePaths: ["/", { regex: "^/blog" }],
          // excludePaths: ["/blog/beep-beep-lettuce"],
          height: 3,
          prependToBody: false,
          color: `#000`,
          footerHeight: 500,
          headerHeight: 0,
        },
      },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
