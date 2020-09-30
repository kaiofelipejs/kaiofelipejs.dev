import React, { useState } from "react"
import PropTypes from "prop-types"
import { ThemeProvider, TaskBar } from "@react95/core"

import Sidebar from "components/Sidebar"
import MenuBar from "components/MenuBar"
import TaskList from "components/TaskList"

import * as S from "./styled"

const Layout = ({ children }) => {
  const [showModal, setShowModal] = useState(true)
  const [readingMode, setReadingMode] = useState(false)

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <ThemeProvider>
      <S.ThemeGlobalStyle />
      <S.StyleBase readingMode={readingMode} />
      <S.LayoutWrapper>
        <Sidebar />

        {showModal && (
          <S.LayoutMain closeModal={closeModal} icon="windows_explorer">
            <S.LayoutMainContent bg="white" boxShadow="in" p={10}>
              {children}
            </S.LayoutMainContent>
          </S.LayoutMain>
        )}

        <MenuBar setReadingMode={setReadingMode} readingMode={readingMode} />
      </S.LayoutWrapper>
      <TaskBar list={<TaskList />} />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
