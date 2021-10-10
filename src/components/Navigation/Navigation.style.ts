import styled, { StyledComponentBase, css } from "styled-components"

interface ICon extends StyledComponentBase<any, {}> {
  SideNav?: any
  List?: any
  ListTitle?: any
  ListItem?: any
  Title?: any
}

const Con: ICon = styled.nav`
  display: flex;
  gap: 1rem;
  position: relative;
  svg {
    cursor: pointer;
  }
`

interface SideNavProps {
  active: boolean
}

const sideNav = styled.section<SideNavProps>`
  transform: translateX(-100%);
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 100%;
  left: 0;
  height: 100vh;
  width: 50%;
  transition: 0.25s ease-in-out;
  background: ${(props) => props.theme.palette.primary.light};
  ${(props) =>
    props.active &&
    css`
      transform: translateX(0);
      opacity: 1;
      visibility: visible;
    `};
`

const list = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
  > * {
    padding: 0.5rem;
  }
`

const listTitle = styled.span`
  font-weight: bold;
`

interface ItemProps {
  active: boolean
}

const listItem = styled.li<ItemProps>`
  display: flex;
  align-items: center;
  gap: 0.3em;
  text-transform: capitalize;
  cursor: pointer;
  border-left: 4px solid transparent;
  border-color: ${(props) => (props.active ? "lightblue" : "transparent")};
  &:hover,
  &:active {
    background: ${(props) => props.theme.palette.primary.lighter};
  }
`

const title = styled.span`
  font-weight: bold;
  font-size: 1.3rem;
`

Con.SideNav = sideNav
Con.List = list
Con.ListTitle = listTitle
Con.ListItem = listItem
Con.Title = title

export default Con
