import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const AppLayout = () => {
  return (
    <div className="h-full overflow-hidden flex flex-col md:flex-row bg-light-bg dark:bg-dark-bg">
      <Navbar />
      <Outlet />
    </div>
  )
}
export default AppLayout
