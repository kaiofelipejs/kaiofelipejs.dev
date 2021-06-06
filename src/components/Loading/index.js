import React from "react"
import styled, { css } from "styled-components"
import gif from "./hourglass.gif"

const Wrapper = styled.div`
  position: fixed;
  top: 50%;

  ${({ right, left, top, bottom }) =>
    css`
      ${!!right && `right: ${right};`}
      ${!!left && `left: ${left};`}
      ${!!top && `top: ${top};`}
      ${!!bottom && `bottom: ${bottom};`}
    `}
`

const Hourglass = styled.img`
  width: 30px;
`

const Loading = props => (
  <Wrapper {...props}>
    <Hourglass src={gif} />
  </Wrapper>
)

export default Loading
