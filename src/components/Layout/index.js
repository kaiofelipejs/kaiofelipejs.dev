import React from "react"
import PropTypes from "prop-types"
import { GlobalStyle, ThemeProvider, TaskBar } from "@react95/core"

import Sidebar from "components/Sidebar"
import MenuBar from "components/MenuBar"
import TaskList from "components/TaskList"

import * as S from "./styled"

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <S.LayoutWrapper>
        <Sidebar />
        <S.LayoutMain>{children}</S.LayoutMain>
        <MenuBar />
      </S.LayoutWrapper>
      <TaskBar list={<TaskList />} />
    </ThemeProvider>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
