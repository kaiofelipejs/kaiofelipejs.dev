import React from "react"
import PropTypes from "prop-types"

import { Icon } from "@react95/core"

import * as S from "./styled"

const MenuBar = ({ setReadingMode, readingMode }) => {
  const toggleReadingMode = () => setReadingMode(!readingMode)

  const setContentInToggleReadingMode = readingMode
    ? "Voltar para o tema"
    : "Modo leitura"

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink to="/" title="Voltar para home">
          <S.MenuBarItem>
            <Icon name="shdocvw_256" />
            <span>Home</span>
          </S.MenuBarItem>
        </S.MenuBarLink>

        <S.MenuBarLink to="/search/" title="Pesquisar">
          <S.MenuBarItem>
            <Icon name="sccview_icon" />
            <span>Buscar</span>
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>

      <S.MenuBarGroup>
        <S.MenuBarItem
          onClick={toggleReadingMode}
          title={setContentInToggleReadingMode}
        >
          <Icon name="winhlp32_4001" />

          <span>{setContentInToggleReadingMode}</span>
        </S.MenuBarItem>

        <S.MenuBarItem title="Ir para o topo">
          <Icon name="progman_46" />
          <span>Ir para o topo</span>
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

MenuBar.propTypes = {
  setReadingMode: PropTypes.func.isRequired,
  readingMode: PropTypes.bool.isRequired,
}

export default MenuBar
