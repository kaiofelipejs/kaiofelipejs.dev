import React from "react"
import * as S from "./styled"

const PostItem = () => (
  <S.PostItemLink>
    <S.PostItemWrapper>
      <S.PostItemTag background="#47650b">Misc</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>
          01 de Janeiro de 2020 - 4 min de leitura
        </S.PostItemDate>
        <S.PostItemTitle>Titulo do post: esse post é brabo</S.PostItemTitle>
        <S.PostItemDescription>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus vero cumque labore impedit facere quo, natus.
        </S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

export default PostItem
