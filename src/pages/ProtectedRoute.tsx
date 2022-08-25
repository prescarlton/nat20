import { ReactNode } from "react"
import { useNavigate } from "react-router-dom"
import { useAppContext } from "../contexts/App"
import LoadingPage from "./Loading"

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { userAuth, checkingStatus } = useAppContext()
  const navigate = useNavigate()
  if (checkingStatus) return <LoadingPage />
  if (!userAuth) navigate("/login", { replace: true })
  return <>{children}</>
}
export default ProtectedRoute
