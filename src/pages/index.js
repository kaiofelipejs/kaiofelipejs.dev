import React from "react"
import Profile from "../components/Profile"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Profile />
  </Layout>
)

export default IndexPage
