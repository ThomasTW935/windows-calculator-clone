import { DefaultTheme } from "styled-components"

const defaultTheme: DefaultTheme = {
  device: {
    sm: "425px",
    md: "768px",
    lg: "1024px",
  },
  palette: {
    common: { white: "#fff", black: "#000" },
    primary: {
      lighter: "#343434",
      light: "#1f1f1f",
      normal: "#131313",
      dark: "#060606",
    },
  },
}
export default defaultTheme
