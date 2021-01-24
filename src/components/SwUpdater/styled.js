import styled from "styled-components"

export const NotificationWrapper = styled.div`
  align-items: center;
  animation: moveUp 0.5s ease-in-out both;
  background: var(--mainColor);
  box-shadow: 0px 0px 25px 2px rgb(195 199 203);
  color: var(--texts);
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 20px 10px;
  position: fixed;
  right: calc(50vw - 320px / 2);
  width: 320px;
  z-index: 10;

  &:hover {
    transition: 0.1s;
    filter: brightness(0.9);
  }

  & * {
    cursor: inherit;
  }

  @keyframes moveUp {
    0% {
      bottom: -100vh;
    }
    100% {
      bottom: 100px;
    }
  }
`

export const IconWrapper = styled.div`
  color: var(--texts);
  height: 30px;
  margin-left: 10px;
  width: 30px;
`
