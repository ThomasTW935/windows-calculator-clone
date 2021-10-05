import styled, { css } from "styled-components"

interface ButtonProps {
  isSpecial: boolean
}

const Button = styled.button<ButtonProps>`
  border: 0;
  background: ${(props) => props.theme.palette.primary.dark};
  font-weight: 800;
  color: white;
  font-size: 1.2rem;
  border-radius: 5px;
  &:hover,
  &:active {
    background: ${(props) => props.theme.palette.primary.lighter};
  }
  ${(props) =>
    props.isSpecial &&
    css`
      font-size: 1rem;
      background: ${(props) => props.theme.palette.primary.normal};
      font-weight: 400;
    `}
`

export default Button
