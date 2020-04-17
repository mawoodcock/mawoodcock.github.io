module.exports = {
  siteMetadata: {
    title: `Michael Woodcock`,
    name: `Michael Woodcock`,
    siteUrl: `https://michaelwoodcock.me`,
    description: `A collection of notes`,
    hero: {
      heading: `Hi, my name is Mike. I am a software engineer and maker.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/mawoodcock`,
      },
      {
        name: `github`,
        url: `https://github.com/mawoodcock`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/mwoodcock`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
