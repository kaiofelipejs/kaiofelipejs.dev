import React from "react"
import PropTypes from "prop-types"

import { Icon } from "@react95/core"

import * as S from "./styled"

const MenuBar = ({ setReadingMode, readingMode }) => {
  const toggleReadingMode = () => setReadingMode(!readingMode)

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink to="/" title="Voltar para home">
          <S.MenuBarItem>
            <Icon
              name="shdocvw_256"
              aria-label="Icone com uma folha ao fundo e uma casa pequena no canto inferior direito."
            />
            <span>Home</span>
          </S.MenuBarItem>
        </S.MenuBarLink>

        <S.MenuBarLink to="/search/" title="Pesquisar">
          <S.MenuBarItem>
            <Icon name="sccview_icon" aria-label="Icone de uma lupa." />
            <span>Buscar</span>
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>

      <S.MenuBarGroup>
        <S.MenuBarItem
          onClick={toggleReadingMode}
          title="Modo leitura"
          readingMode={readingMode}
        >
          <Icon name="bookmark" aria-label="Icone de um livro aberto." />

          <span>Modo leitura</span>
        </S.MenuBarItem>

        <S.MenuBarItem title="Ir para o topo">
          <Icon
            name="progman_46"
            aria-label="Icone de uma seta apontando para cima."
          />
          <span>Ir para o topo</span>
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

MenuBar.propTypes = {
  setReadingMode: PropTypes.func,
  readingMode: PropTypes.bool,
}

export default MenuBar
