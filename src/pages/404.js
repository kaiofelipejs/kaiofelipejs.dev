import React from "react"
import { Link } from "gatsby"
import { Button } from "@react95/core"

import Layout from "components/Layout"
import SEO from "components/seo"

import { MainContent } from "components/Post/styled"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Layout>
      <MainContent>
        <h1>Ops! Nada por aqui...</h1>

        <Link to="/">
          <Button css={{ fontSize: "1.5rem" }}>Voltar para a home</Button>
        </Link>
      </MainContent>
    </Layout>
  </>
)

export default NotFoundPage
