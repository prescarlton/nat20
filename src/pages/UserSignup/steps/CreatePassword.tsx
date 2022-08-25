import { AxiosError } from "axios"
import { FirebaseError } from "firebase/app"
import { updatePassword } from "firebase/auth"
import { ChangeEvent, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import Button from "../../../components/common/Button"
import FormPage from "../../../components/common/FormPage"
import Input from "../../../components/common/Input"
import { AuthError } from "../../../constants"
import { useAppContext } from "../../../contexts/App"
import ProtectedRoute from "../../ProtectedRoute"

const CreatePasswordPage = ({ nextStep }: { nextStep: () => void }) => {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const { userData, userAuth } = useAppContext()
  const navigate = useNavigate()

  // if user has data, navigate 'em home
  if (userData) navigate("/home", { replace: true })
  // if the user isn't signed in, navigate to login
  if (!userAuth) return <Navigate to="/login" replace />

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
    setError("")
  }

  const handleChangeConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.currentTarget.value)
    if (password != e.currentTarget.value) setError(AuthError.PASSWORD_MISMATCH)
    else setError("")
  }

  const handleSubmit = () => {
    if (password == confirmPassword) {
      setError("")
      updatePassword(userAuth, password)
        .then(() => {
          nextStep()
        })
        .catch((res) => {
          let err = res as FirebaseError
          if (err.code == "auth/weak-password")
            setError(AuthError.WEAK_PASSWORD)
          else if (err.code == "auth/requires-recent-login")
            navigate("/login", { replace: true })
        })
    } else setError(AuthError.PASSWORD_MISMATCH)
  }

  return (
    <ProtectedRoute>
      <FormPage title="Create Password" subtitle="Make it a good one.">
        <div className="flex flex-col justify-between flex-1 w-full">
          <div className="flex flex-col gap-4">
            <Input
              value={password}
              onChange={handleChangePassword}
              placeholder="Password"
              type="password"
            />
            <Input
              value={confirmPassword}
              onChange={handleChangeConfirmPassword}
              placeholder="Confirm Password"
              type="password"
            />
            <h2 className="text-red-400 text-center">{error}</h2>
          </div>
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </FormPage>
    </ProtectedRoute>
  )
}
export default CreatePasswordPage
