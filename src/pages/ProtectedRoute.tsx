import { ReactNode } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthListener } from "../hooks/firebase/useAuthStatus"
import LoadingPage from "./Loading"

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { loggedIn, checkingStatus } = useAuthListener()
  const navigate = useNavigate()
  if (checkingStatus) return <LoadingPage />
  if (!loggedIn) navigate("/login", { replace: true })
  return <>{children}</>
}
export default ProtectedRoute
