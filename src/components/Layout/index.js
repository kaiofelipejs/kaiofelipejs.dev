import React from "react"
import PropTypes from "prop-types"
import { GlobalStyle, ThemeProvider } from "@react95/core"

import Sidebar from "components/Sidebar"
import * as S from "./styled"

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <S.LayoutWrapper>
        <Sidebar />
        <S.LayoutMain>{children}</S.LayoutMain>
      </S.LayoutWrapper>
    </ThemeProvider>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
