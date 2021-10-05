import styled, { css } from "styled-components"

interface IProps {
  active: boolean
}

const Input = styled.input<IProps>`
  font-weight: 300;
  outline: 0;
  font-size: 2rem;
  ${(props) =>
    props.active &&
    css`
      font-weight: 600;
    `}
`

export default Input
