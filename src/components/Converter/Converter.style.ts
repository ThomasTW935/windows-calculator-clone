import styled, { StyledComponentBase } from "styled-components"

interface ICon extends StyledComponentBase<any, {}> {
  Display?: any
  Buttons?: any
}

const Con: ICon = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 0;
`

const display = styled.section`
  div {
    padding-bottom: 2rem;
  }
  select {
    margin-top: 0.5rem;
    display: block;
    text-transform: capitalize;
    font-size: 1.1rem;
    option {
      color: black;
    }
  }
`

const buttons = styled.section`
  display: grid;
  grid-template: repeat(5, 1fr) / repeat(3, 1fr);
  gap: 0.3em;
  height: 100%;
`

Con.Display = display
Con.Buttons = buttons

export default Con
