import React from "react"
import * as S from "./styled"

import Profile from "components/Profile"
import SocialLinks from "components/SocialLinks"
import MenuLinks from "components/MenuLinks"

const Sidebar = () => (
  <S.Root>
    <S.SidebarWrapper>
      <Profile />
      <SocialLinks />
      <MenuLinks />
    </S.SidebarWrapper>
  </S.Root>
)

export default Sidebar
