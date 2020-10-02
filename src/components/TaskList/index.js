import React from "react"
import { List } from "@react95/core"

import * as S from "./styled"

const TaskList = () => (
  <List>
    <List.Item icon="folder_file">
      <List>
        <S.ListLink to="/">
          <List.Item icon="shdocvw_256">Home</List.Item>
        </S.ListLink>
        <S.ListLink to="/about/">
          <List.Item icon="ulclient_1002">Sobre mim</List.Item>
        </S.ListLink>
        <S.ListLink to="/search/">
          <List.Item icon="sccview_icon">Busca</List.Item>
        </S.ListLink>
      </List>
      Páginas
    </List.Item>
    <List.Item icon="bookmark">
      <List>
        <List.Item>Ativar</List.Item>
      </List>
      Modo leitura
    </List.Item>
    <List.Divider />
    <List.Item icon="settings">
      <List>
        <S.ListExternalLink href="https://github.com/kaiofelipejs/kaiofelipejs.dev">
          <List.Item icon="chatshow_3000">Repositório</List.Item>
        </S.ListExternalLink>
        <S.ListExternalLink href="https://github.com/React95/React95">
          <List.Item icon="brush">React95 lib</List.Item>
        </S.ListExternalLink>
      </List>
      Código fonte
    </List.Item>
  </List>
)

export default TaskList
