import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import ProtectedRoute from "../pages/ProtectedRoute"

const AppLayout = () => {
  return (
    <ProtectedRoute>
      <div className="h-full overflow-hidden flex flex-col md:flex-row bg-light-bg dark:bg-dark-bg">
        <Navbar />
        <Outlet />
      </div>
    </ProtectedRoute>
  )
}
export default AppLayout
