import React, { useState } from "react"
import PropTypes from "prop-types"
import { TransitionPortal } from "gatsby-plugin-transition-link"
import {
  ThemeProvider,
  TaskBar,
  GlobalStyle as ThemeGlobalStyle,
  List,
} from "@react95/core"

import Sidebar from "components/Sidebar"
import MenuBar from "components/MenuBar"
import TaskList from "components/TaskList"

import * as S from "./styled"
import StyleBase from "../../styles/global"

const Layout = ({ children }) => {
  const [showModal, setShowModal] = useState(true)
  const [readingMode, setReadingMode] = useState(false)

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <ThemeProvider>
      <ThemeGlobalStyle />
      <StyleBase />
      <S.LayoutWrapper>
        <TransitionPortal level="top">
          <Sidebar />
        </TransitionPortal>

        {showModal && (
          <S.LayoutMain
            closeModal={closeModal}
            icon="windows_explorer"
            title="Conteúdo"
            menu={[
              {
                name: "Modo leitura",
                list: (
                  <List>
                    <List.Item onClick={() => setReadingMode(!readingMode)}>
                      {readingMode ? "Desativar" : "Ativar"}
                    </List.Item>
                  </List>
                ),
              },
            ]}
          >
            <S.LayoutMainContent
              bg="white"
              boxShadow="in"
              p={10}
              readingMode={readingMode}
            >
              {children}
            </S.LayoutMainContent>
          </S.LayoutMain>
        )}

        <TransitionPortal level="top">
          <MenuBar setReadingMode={setReadingMode} readingMode={readingMode} />
        </TransitionPortal>
      </S.LayoutWrapper>
      <TransitionPortal level="top">
        <TaskBar
          list={
            <TaskList
              setReadingMode={setReadingMode}
              readingMode={readingMode}
            />
          }
        />
      </TransitionPortal>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
