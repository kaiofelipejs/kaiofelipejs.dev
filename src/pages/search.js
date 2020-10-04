import React from "react"

import Layout from "components/Layout"
import SEO from "components/seo"
import Search from "components/Search"

const SearchPage = () => (
  <>
    <SEO title="Search" />
    <Layout>
      <Search />
    </Layout>
  </>
)

export default SearchPage
