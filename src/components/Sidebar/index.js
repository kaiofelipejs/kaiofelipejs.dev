import React from "react"
import * as S from "./styled"

import { InfoBubble } from "@react95/icons"

import Profile from "components/Profile"
import SocialLinks from "components/SocialLinks"
import MenuLinks from "components/MenuLinks"

const Sidebar = () => (
  <S.Root icon={<InfoBubble variant="32x32_4" />} title="Kaio Felipe Silva">
    <S.SidebarWrapper>
      <Profile />
      <SocialLinks />
      <MenuLinks />
    </S.SidebarWrapper>
  </S.Root>
)

export default Sidebar
