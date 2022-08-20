import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { AppProvider } from "../contexts/App"
import ProtectedRoute from "../pages/ProtectedRoute"

const AppLayout = () => {
  return (
    <ProtectedRoute>
      <AppProvider>
        <div className="h-full overflow-hidden flex flex-col md:flex-row bg-light-bg dark:bg-dark-bg">
          <Navbar />
          <Outlet />
        </div>
      </AppProvider>
    </ProtectedRoute>
  )
}
export default AppLayout
