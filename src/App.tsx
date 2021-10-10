import { useState } from "react"
import Con from "./App.style"
import { Converter, Navigation } from "./components"
import { UNITS } from "./Data/Converter"

function App() {
  const [activeTab, setActiveTab] = useState("LENGTH")
  return (
    <Con>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {Object.keys(UNITS).map((key) => {
        if (key === activeTab) return <Converter key={key} base={activeTab} />
      })}
    </Con>
  )
}

export default App
