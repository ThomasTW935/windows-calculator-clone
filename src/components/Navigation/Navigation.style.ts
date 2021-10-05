import styled, { StyledComponentBase } from "styled-components"

interface ICon extends StyledComponentBase<any, {}> {
  SideNav?: any
  ListTitle?: any
  Title?: any
}

const Con: ICon = styled.nav`
  display: flex;
  gap: 1rem;
  position: relative;
`
const sideNav = styled.section`
  ul {
    position: absolute;
    top: 100%;
    left: 0;
    height: 100vh;
    width: 50%;
    background: ${(props) => props.theme.palette.primary.light};
    padding: 1rem;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    list-style: none;
    li {
      text-transform: capitalize;
    }
  }
`

const listTitle = styled.li`
  
`

const title = styled.span`
  font-weight: bold;
  font-size: 1.3rem;
`

Con.SideNav = sideNav
Con.ListTitle = listTitle
Con.Title = title

export default Con
