import styled from "styled-components"
import { Link } from "gatsby"

export const ListLink = styled(Link)`
  flex-grow: 1;
  height: 30px;
  padding-top: 9px;
  text-decoration: none;
  color: inherit;

  & * {
    cursor: inherit;
  }
`

export const ListExternalLink = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer",
})`
  flex-grow: 1;
  height: 30px;
  padding-top: 9px;
  text-decoration: none;
  color: inherit;

  & * {
    cursor: inherit;
  }
`
