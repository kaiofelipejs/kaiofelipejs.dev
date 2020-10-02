import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { List } from "@react95/core"

export const ListItem = styled(List.Item)`
  ${({ smallIcon }) =>
    smallIcon &&
    css`
      i {
        padding: 4px;
        background-origin: content-box;
        flex-shrink: 0;
      }
    `}

  cursor: pointer;
`

export const ListLink = styled(Link)`
  flex-grow: 1;
  height: 30px;
  padding-top: 9px;
  text-decoration: none;
  color: inherit;

  & * {
    cursor: inherit;
  }

  & li {
    margin-left: 1rem;
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
