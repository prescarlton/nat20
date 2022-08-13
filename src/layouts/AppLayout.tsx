import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const AppLayout = () => {
  return (
    <div className="h-screen overflow-hidden flex bg-light-bg dark:bg-dark-bg">
      <Navbar />
      <Outlet />
    </div>
  )
}
export default AppLayout
