import React from "react"
import PropTypes from "prop-types"
import { List } from "@react95/core"

import { Shdocvw256 } from "@react95/icons/esm/react/Shdocvw256"
import { SccviewIcon } from "@react95/icons/esm/react/SccviewIcon"
import { Bookmark } from "@react95/icons/esm/react/Bookmark"
import { Settings } from "@react95/icons/esm/react/Settings"
import { WindowsExplorer } from "@react95/icons/esm/react/WindowsExplorer"
import { Ulclient1002 } from "@react95/icons/esm/react/Ulclient1002"

import * as S from "./styled"

const TaskList = ({ setShowModal, setReadingMode, readingMode }) => (
  <List>
    <S.ListItem
      icon={<WindowsExplorer variant="32x32_4" alt="Windows Explorer icon" />}
    >
      Páginas
    </S.ListItem>

    <S.ListLink
      to="/"
      cover
      direction="left"
      bg="#55aaaa"
      duration={0.6}
      onClick={() => setShowModal(true)}
    >
      <S.ListItem
        icon={
          <Shdocvw256
            variant="32x32_4"
            aria-label="Icone com uma folha ao fundo e uma casa pequena no canto inferior direito."
          />
        }
        smallIcon
      >
        Home
      </S.ListItem>
    </S.ListLink>
    <S.ListLink
      to="/about/"
      cover
      direction="left"
      bg="#55aaaa"
      duration={0.6}
      onClick={() => setShowModal(true)}
    >
      <S.ListItem icon={<Ulclient1002 variant="32x32_4" />}>
        Sobre mim
      </S.ListItem>
    </S.ListLink>
    <S.ListLink
      to="/search/"
      cover
      direction="left"
      bg="#55aaaa"
      duration={0.6}
    >
      <S.ListItem
        icon={<SccviewIcon variant="32x32_4" aria-label="Icone de uma lupa." />}
        smallIcon
        onClick={() => setShowModal(true)}
      >
        Busca
      </S.ListItem>
    </S.ListLink>

    <List.Divider />

    <S.ListItem
      icon={
        <Bookmark variant="32x32_4" aria-label="Icone de um livro aberto." />
      }
      onClick={() => setReadingMode(!readingMode)}
    >
      {readingMode ? "Desativar" : "Ativar"} modo leitura
    </S.ListItem>
    <S.ListExternalLink href="https://github.com/kaiofelipejs/kaiofelipejs.dev">
      <S.ListItem icon={<Settings variant="32x32_4" />}>
        Código fonte
      </S.ListItem>
    </S.ListExternalLink>
  </List>
)

TaskList.propTypes = {
  setShowModal: PropTypes.func,
  setReadingMode: PropTypes.func,
  readingMode: PropTypes.bool,
}

export default TaskList
