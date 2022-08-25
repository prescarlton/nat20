import { Navigate } from "react-router-dom"
import FormPage from "../components/common/FormPage"
import { useAppContext } from "../contexts/App"
import LoadingPage from "./Loading"

const DefaultPage = () => {
  const { userData, userAuth, checkingStatus } = useAppContext()

  if (checkingStatus)
    return (
      <FormPage title="nat 20">
        <LoadingPage />
      </FormPage>
    )
  if (!userAuth) return <Navigate to="/login" replace />
  // // const user = getUserData(userAuth.uid)
  else if (!userData) return <Navigate to="/user-signup" replace />
  else return <Navigate to="/home" replace />
}
export default DefaultPage
