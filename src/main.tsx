import ReactDOM from "react-dom/client"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./router"

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container!)

root.render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
)
