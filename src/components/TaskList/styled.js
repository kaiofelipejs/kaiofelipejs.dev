import styled from "styled-components"
import { List } from "@react95/core"

export const ListItem = styled(List.Item)``

export const ListLink = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer",
})`
  flex-grow: 1;
  height: 30px;
  padding-top: 9px;
  text-decoration: none;
  color: inherit;
`
