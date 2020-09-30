import React from "react"
import { List } from "@react95/core"

import * as S from "./styled"

const TaskList = () => (
  <List>
    <S.ListItem icon="plugin">
      <S.ListLink href="https://github.com/React95/React95">
        React95 Library
      </S.ListLink>
    </S.ListItem>
    <List.Divider />
    <S.ListItem icon="computer_3">
      <S.ListLink href="https://github.com/kaiofelipejs/personal-site">
        Source Code
      </S.ListLink>
    </S.ListItem>
  </List>
)

export default TaskList
