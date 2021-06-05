import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { TransitionPortal } from "gatsby-plugin-transition-link"
import {
  ThemeProvider,
  TaskBar,
  GlobalStyle as ThemeGlobalStyle,
  List,
} from "@react95/core"
import { WindowsExplorer } from "@react95/icons"

import Sidebar from "components/Sidebar"
import MenuBar from "components/MenuBar"
import TaskList from "components/TaskList"

import * as S from "./styled"
import StyleBase from "../../styles/global"

const Layout = ({ children }) => {
  const [showModal, setShowModal] = useState(true)
  const [readingMode, setReadingMode] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)

  const closeModal = () => {
    setShowModal(false)
  }

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )

  return (
    <ThemeProvider>
      <ThemeGlobalStyle />
      <StyleBase />
      <S.LayoutWrapper>
        {!isMobile && (
          <TransitionPortal level="top">
            <Sidebar />
          </TransitionPortal>
        )}

        {showModal && (
          <S.LayoutMain
            isMobile={isMobile}
            closeModal={closeModal}
            icon={<WindowsExplorer variant="32x32_4" />}
            title={isMobile ? "Kaio Felipe Silva" : "Conteúdo"}
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
              setShowModal={setShowModal}
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
