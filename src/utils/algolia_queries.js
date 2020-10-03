const postsQuery = `{
  posts: allMarkdownRemark( sort: { order: DESC, fields: frontmatter___date }){
    edges {
      node {
        objectID: id
        fields {
          slug
        }
        frontmatter {
          category
          background
          date_timestamp: date
          date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
          description
          title
        }
        excerpt(pruneLength: 5000)
        timeToRead
      }
    }
  }
}`

const flatten = arr =>
  arr.map(({ node: { frontmatter, timeToRead, ...rest } }) => ({
    ...frontmatter,
    date_timestamp: parseInt(
      (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)
    ),
    timeToRead,
    ...rest,
  }))

const queries = [
  {
    query: postsQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
    settings: {
      attributesToSnippet: ["excerpt:20"],
    },
  },
]

module.exports = queries
