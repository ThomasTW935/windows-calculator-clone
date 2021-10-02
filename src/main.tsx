import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { ThemeProvider } from "styled-components"
import defaultTheme from "./core-ui/theme"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
