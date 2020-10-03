import styled from "styled-components"
import media from "styled-media-query"

import { Modal } from "@react95/core"

export const Root = styled(Modal)`
  top: 0;

  ${media.lessThan("large")`
    /* height: auto;
    padding-bottom: 0;
    width: 100vw; */
    display: none;
  `}
`

export const SidebarWrapper = styled.aside`
  height: 90vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 18.5rem;

  ${media.lessThan("large")`
    align-items: flex-start;
    height: auto;
  `}
`
