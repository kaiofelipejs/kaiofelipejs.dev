import React from "react"
import { List } from "@react95/core"

import * as S from "./styled"

const TaskList = () => (
  <List>
    <S.ListLink href="https://github.com/React95/React95">
      <S.ListItem icon="plugin">React95 Library</S.ListItem>
    </S.ListLink>
    <List.Divider />
    <S.ListLink href="https://github.com/kaiofelipejs/personal-site">
      <S.ListItem icon="computer_3">Source Code</S.ListItem>
    </S.ListLink>
  </List>
)

export default TaskList
