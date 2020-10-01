import React from "react"

import Layout from "components/Layout"
import SEO from "components/seo"
import PostItem from "components/PostItem"

const IndexPage = () => (
  <Layout>
    <SEO title="Home | Kaio Felipe Silva" />
    <PostItem
      slug="/about/"
      background=""
      category="Misc"
      date="01 de Janeiro de 2020"
      timeToRead="5"
      title="Titulo muito brabo! É, ç ẽ ê"
      description="Esse post é top, jamais visto"
    />
  </Layout>
)

export default IndexPage
