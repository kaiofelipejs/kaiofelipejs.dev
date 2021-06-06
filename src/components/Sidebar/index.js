import React from "react"
import * as S from "./styled"

import { InfoBubble } from "@react95/icons"

import Loading from "components/Loading"

const Profile = React.lazy(() => import("components/Profile"))
const SocialLinks = React.lazy(() => import("components/SocialLinks"))
const MenuLinks = React.lazy(() => import("components/MenuLinks"))

const Sidebar = () => (
  <S.Root icon={<InfoBubble variant="32x32_4" />} title="Kaio Felipe Silva">
    <S.SidebarWrapper>
      <React.Suspense fallback={<Loading />}>
        <Profile />
        <SocialLinks />
        <MenuLinks />
      </React.Suspense>
    </S.SidebarWrapper>
  </S.Root>
)

export default Sidebar
