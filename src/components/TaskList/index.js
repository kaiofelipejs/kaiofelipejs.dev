import React from "react"
import PropTypes from "prop-types"
import { List } from "@react95/core"

import * as S from "./styled"

const TaskList = ({ setShowModal, setReadingMode, readingMode }) => (
  <List>
    <S.ListItem icon="windows_explorer_32x32_4bit">Páginas</S.ListItem>

    <S.ListLink
      to="/"
      cover
      direction="left"
      bg="#55aaaa"
      duration={0.6}
      onClick={() => setShowModal(true)}
    >
      <S.ListItem icon="shdocvw_256_32x32_4bit" smallIcon>
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
      <S.ListItem icon="ulclient_1002_32x32_4bit">Sobre mim</S.ListItem>
    </S.ListLink>
    <S.ListLink
      to="/search/"
      cover
      direction="left"
      bg="#55aaaa"
      duration={0.6}
    >
      <S.ListItem
        icon="sccview_icon_32x32_4bit"
        smallIcon
        onClick={() => setShowModal(true)}
      >
        Busca
      </S.ListItem>
    </S.ListLink>

    <List.Divider />

    <S.ListItem
      icon="bookmark_32x32_4bit"
      onClick={() => setReadingMode(!readingMode)}
    >
      {readingMode ? "Desativar" : "Ativar"} modo leitura
    </S.ListItem>
    <S.ListItem icon="settings_32x32_4bit">
      <S.ListExternalLink href="https://github.com/kaiofelipejs/kaiofelipejs.dev">
        Código fonte
      </S.ListExternalLink>
    </S.ListItem>
  </List>
)

TaskList.propTypes = {
  setShowModal: PropTypes.func,
  setReadingMode: PropTypes.func,
  readingMode: PropTypes.bool,
}

export default TaskList
