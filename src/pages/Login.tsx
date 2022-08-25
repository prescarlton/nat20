import { ChangeEvent, useState } from "react"
import Button from "../components/common/Button"
import { firebaseAuth } from "../firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import LoadingPage from "./Loading"
import getUserData from "../data/getUserData"
import FormPage from "../components/common/FormPage"
import { User } from "../types/data/User"
import { AuthError } from "../constants"
import { useAppContext } from "../contexts/App"

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const navigate = useNavigate()
  const { checkingStatus } = useAppContext()

  const handleLogin = () => {
    if (!email) {
      setErrorMessage(AuthError.INVALID_EMAIL)
      return
    }
    if (!password) {
      setErrorMessage(AuthError.MISSING_PASSWORD)
      return
    }
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        // check if user
        // if not, create them
        getUserData(user.uid).then((res) => {
          const userData = res.data() as User
          console.log(userData)
          // if the user doesn't have data, send them
          // to the user signup page
          if (!res.exists()) {
            navigate("/user-signup", { replace: true })
            return
          } else {
            navigate("/home")
          }
        })
      })
      .catch(() => {
        setErrorMessage(AuthError.INVALID_CREDENTIALS)
      })
  }

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.currentTarget.value)

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.currentTarget.value)

  if (checkingStatus) return <LoadingPage />
  return (
    <FormPage title="nat 20" subtitle="Let's get going. Sign in below.">
      <div className="flex flex-col justify-between flex-1 w-full">
        <div className="flex flex-col gap-4">
          <input
            name="email"
            value={email}
            type="email"
            onChange={handleChangeEmail}
            placeholder="Email"
            className="py-2 px-4 border-2 dark:border-white bg-transparent border-opacity-40 
            dark:text-white rounded-lg"
          />
          <input
            name="password"
            value={password}
            type="password"
            onChange={handleChangePassword}
            placeholder="Password"
            className="py-2 px-4 border-2 dark:border-white bg-transparent border-opacity-40 dark:text-white rounded-lg"
          />
          <h2 className="text-red-400">{errorMessage}</h2>
        </div>

        <Button onClick={handleLogin} className="w-full">
          Log in
        </Button>
      </div>
    </FormPage>
  )
}
export default LoginPage
