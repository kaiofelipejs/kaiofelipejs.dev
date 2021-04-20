const path = require("path")
require("dotenv").config()

const queries = require("./src/utils/algolia_queries")

const pluginConfig = [
  `gatsby-plugin-transition-link`,
  `gatsby-plugin-styled-components`,
  `gatsby-plugin-react-helmet`,
  // needs to be the first to work with gatsby-remark-images
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `uploads`,
      path: `${__dirname}/static/assets/img`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `posts`,
      path: `${__dirname}/posts`,
    },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-relative-images`,
          options: {
            name: "uploads",
          },
        },
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 900,
            linkImagesToOriginal: false,
          },
        },
        `gatsby-remark-lazy-load`,
        `gatsby-remark-prismjs`,
      ],
    },
  },
  {
    resolve: `gatsby-plugin-root-import`,
    options: {
      components: path.join(__dirname, "src/components"),
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-gtag`,
    options: {
      trackingId: `UA-163967455-2`,
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Kaio Felipe Silva`,
      short_name: `Blog do Kaio`,
      start_url: `/`,
      background_color: `#55aaaa`,
      theme_color: `#55aaaa`,
      display: `minimal-ui`,
      icon: `static/assets/img/icon.png`, // This path is relative to the root of the site.
    },
  },
  `gatsby-plugin-sitemap`,
  `gatsby-plugin-remove-serviceworker`,
  `gatsby-plugin-netlify-cms`,
]

if (process.env.CONTEXT === "production") {
  const algolia = {
    resolve: `gatsby-plugin-algolia-search`,
    options: {
      appId: process.env.GATSBY_ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_ADMIN_KEY,
      indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
      queries,
      chunkSize: 10000,
      enablePartialUpdates: true,
    },
  }

  pluginConfig.push(algolia)
}

module.exports = {
  siteMetadata: {
    position: `Software Engineer`,
    description: `Um cara simples que escreve alguns códigos e busca compartilhar conhecimento com outras pessoas.`,
    author: `Kaio Felipe Silva`,
    siteUrl: `https://kaiofelipejs.dev`,
  },
  plugins: pluginConfig,
}
