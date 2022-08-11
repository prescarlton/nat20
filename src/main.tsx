import { ThemeProvider } from "@mui/material"
import ReactDOM from "react-dom/client"
import theme from "./theme"
import "./globalStyles.css"
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./router"

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container!)

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  </BrowserRouter>
)
