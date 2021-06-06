import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as S from "./styled"

const Avatar = () => (
  <S.AvatarWrapper>
    <StaticImage
      src="../../../static/assets/img/profile-photo.jpg"
      alt="Uma foto minha sorrindo de frente para a camera"
      placeholder="blurred"
    />
  </S.AvatarWrapper>
)

export default Avatar
