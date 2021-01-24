import React from "react"
import { Refresh } from "@styled-icons/boxicons-regular/Refresh"

import * as S from "./styled"

const SwUpdater = () => (
  <S.NotificationWrapper onClick={() => window.location.reload()}>
    <p>Tem uma atualização disponível.</p>
    <S.IconWrapper>
      <Refresh />
    </S.IconWrapper>
  </S.NotificationWrapper>
)

export default SwUpdater
