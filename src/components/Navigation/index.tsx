import Con from "./Navigation.style"
import { Navigation as NavIcon } from "@styled-icons/fluentui-system-filled"
import { UNITS } from "../../Data/Converter"
import { CALCULATOR } from "../../Data/Calculator"

export default function Navigation() {
  const handleListItems = (obj: {}) => {
    return Object.keys(obj).map((key) => <li key={key}>{key.toLowerCase()}</li>)
  }
  return (
    <Con>
      <Con.SideNav>
        <NavIcon size={30} />
        <ul>
          <li>Calculator</li>
          {handleListItems(CALCULATOR)}
          <li>Converter</li>
          {handleListItems(UNITS)}
        </ul>
      </Con.SideNav>
      <Con.Title>Length</Con.Title>
    </Con>
  )
}
