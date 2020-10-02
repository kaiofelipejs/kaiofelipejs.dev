import React from "react"
import PropTypes from "prop-types"
import { List } from "@react95/core"

import * as S from "./styled"

const TaskList = ({ setReadingMode, readingMode }) => (
  <List>
    <S.ListItem icon="windows_explorer">Páginas</S.ListItem>

    <S.ListLink to="/" cover direction="left" bg="#55aaaa" duration={0.6}>
      <S.ListItem icon="shdocvw_256" smallIcon>
        Home
      </S.ListItem>
    </S.ListLink>
    <S.ListLink to="/about/" cover direction="left" bg="#55aaaa" duration={0.6}>
      <S.ListItem icon="ulclient_1002" smallIcon>
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
      <S.ListItem icon="sccview_icon" smallIcon>
        Busca
      </S.ListItem>
    </S.ListLink>

    <S.ListItem icon="bookmark" onClick={() => setReadingMode(!readingMode)}>
      {readingMode ? "Desativar" : "Ativar"} modo leitura
    </S.ListItem>

    <List.Divider />

    <S.ListItem icon="settings">
      <S.ListExternalLink href="https://github.com/kaiofelipejs/kaiofelipejs.dev">
        Código fonte
      </S.ListExternalLink>
    </S.ListItem>
  </List>
)

TaskList.propTypes = {
  setReadingMode: PropTypes.func,
  readingMode: PropTypes.bool,
}

export default TaskList
