import styled, { css } from "styled-components"

const baseInputAndSelect = css`
  select,
  input {
    background: 0;
    border: 0;
  }
`

const Con = styled.div`
  background: ${(props) => props.theme.palette.primary.light};
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 5px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  ${baseInputAndSelect}
  & * {
    color: white;
  }
  & > * {
    padding: 1rem;
  }

  @media (min-width: ${(props) => props.theme.device.md}) {
    height: 70vmax;
    width: 50vmax;
    max-width: 400px;
    max-height: 600px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`

export default Con
