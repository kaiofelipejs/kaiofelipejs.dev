import React from "react"
import PropTypes from "prop-types"

import { Shdocvw256 } from "@react95/icons/esm/react/Shdocvw256"
import { SccviewIcon } from "@react95/icons/esm/react/SccviewIcon"
import { Bookmark } from "@react95/icons/esm/react/Bookmark"

import * as S from "./styled"

const MenuBar = ({ setReadingMode, readingMode }) => {
  const toggleReadingMode = () => setReadingMode(!readingMode)

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink
          to="/"
          cover
          direction="right"
          bg="#55aaaa"
          duration={0.6}
          title="Voltar para home"
        >
          <S.MenuBarItem>
            <Shdocvw256
              variant="32x32_4"
              aria-label="Icone com uma folha ao fundo e uma casa pequena no canto inferior direito."
            />
            <span>Home</span>
          </S.MenuBarItem>
        </S.MenuBarLink>

        <S.MenuBarLink
          to="/search/"
          cover
          direction="right"
          bg="#55aaaa"
          duration={0.6}
          title="Pesquisar"
        >
          <S.MenuBarItem>
            <SccviewIcon variant="32x32_4" aria-label="Icone de uma lupa." />
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
          <Bookmark variant="32x32_4" aria-label="Icone de um livro aberto." />
          <span>Modo leitura</span>
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
