import React from "react"

import { Icon } from "@react95/core"

import * as S from "./styled"

const MenuBar = () => (
  <S.MenuBarWrapper>
    <S.MenuBarGroup>
      <S.MenuBarLink to="/" title="Voltar para home">
        <S.MenuBarItem>
          <Icon name="shdocvw_256" />
          <span>Home</span>
        </S.MenuBarItem>
      </S.MenuBarLink>

      <S.MenuBarLink to="/search/" title="Pesquisar">
        <S.MenuBarItem>
          <Icon name="sccview_icon" />
          <span>Buscar</span>
        </S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGroup>

    <S.MenuBarGroup>
      <S.MenuBarLink title="Modo leitura">
        <S.MenuBarItem>
          <Icon name="bookmark" />
          <span>Modo leitura</span>
        </S.MenuBarItem>
      </S.MenuBarLink>

      <S.MenuBarLink title="Ir para o topo">
        <S.MenuBarItem>
          <Icon name="progman_46" />
          <span>Ir para o topo</span>
        </S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
)

export default MenuBar
