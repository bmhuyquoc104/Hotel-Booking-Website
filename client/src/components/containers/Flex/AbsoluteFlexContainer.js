import styled from 'styled-components'

const AbsoluteFlexContainer = styled.div`
  position: fixed;
  z-index: 5;
  top: 0px;
  left: 0px;
  background: linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1));
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export { AbsoluteFlexContainer }
