import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const url = site.siteMetadata.siteUrl
  const ogImage = `${url}/assets/img/${image || "og-image.jpg"}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={site.siteMetadata.title}
      meta={[
        {
          name: `aplication-name`,
          content: "Kaio Felipe Silva Blog",
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: ogImage,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:image:src`,
          content: ogImage,
        },
        {
          name: `twitter:creator`,
          content: `@kaiofelipejs`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `google-site-verification`,
          content: `Amuxq5ZRQvvt0iU1WRnEHxe8eE9nQ_t64n3lRbYycdY`,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `pt-br`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
