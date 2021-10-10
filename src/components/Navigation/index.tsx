import { useState } from "react"
import Con from "./Navigation.style"
import { Navigation as NavIcon } from "@styled-icons/fluentui-system-filled"
import { CALCULATOR } from "../../Data/Calculator"
import { BASE_ICONS } from "../../Data"
import { UNITS } from "../../Data/Converter"

interface Props {
  activeTab: string
  setActiveTab: (arg1: string) => void
}

export default function Navigation({ activeTab, setActiveTab }: Props) {
  const [activeSideNav, setActiveSideNav] = useState(false)

  function handleItemClicked(key: string) {
    setActiveTab(key)
    setActiveSideNav(false)
  }

  const handleListItems = (obj: {}) => {
    return Object.keys(obj).map((key, index) => {
      const ICON = BASE_ICONS[key]
      return (
        <Con.ListItem
          active={activeTab === key}
          onClick={() => handleItemClicked(key)}
          key={key}
        >
          <ICON size={20} />
          <span>{key.toLowerCase()}</span>
        </Con.ListItem>
      )
    })
  }
  return (
    <Con>
      <NavIcon
        onClick={() => {
          setActiveSideNav(!activeSideNav)
        }}
        size={30}
      />
      <Con.SideNav active={activeSideNav}>
        <Con.List>
          <Con.ListTitle>Calculator</Con.ListTitle>
          {handleListItems(CALCULATOR)}
        </Con.List>
        <Con.List>
          <Con.ListTitle>Converter</Con.ListTitle>
          {handleListItems(UNITS)}
        </Con.List>
      </Con.SideNav>
      <Con.Title>{activeTab.toLowerCase()}</Con.Title>
    </Con>
  )
}
