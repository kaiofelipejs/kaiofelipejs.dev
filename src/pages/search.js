import React from "react"

import Layout from "components/Layout"
import Seo from "components/seo"
import Search from "components/Search"

const SearchPage = () => (
  <>
    <Seo title="Search" />
    <Layout>
      <Search />
    </Layout>
  </>
)

export default SearchPage
