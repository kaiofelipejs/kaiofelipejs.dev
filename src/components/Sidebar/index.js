import React from "react"
import * as S from "./styled"

import Profile from "components/Profile"
import SocialLinks from "components/SocialLinks"

const Sidebar = () => (
  <S.Root>
    <S.SidebarWrapper>
      <Profile />
      <SocialLinks />
    </S.SidebarWrapper>
  </S.Root>
)

export default Sidebar
