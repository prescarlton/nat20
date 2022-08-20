import { ChangeEvent, useState } from "react"
import Button from "../components/common/Button"
import { firebaseAuth } from "../firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { GiDiceTwentyFacesTwenty } from "react-icons/gi"

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleLogin = () => {
    signInWithEmailAndPassword(firebaseAuth, email, password).then(
      (userCredential) => {
        const user = userCredential.user
        console.log(user)
      }
    )
  }
  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.currentTarget.value)

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.currentTarget.value)

  return (
    <div className="h-full overflow-hidden flex flex-colbg-light-bg dark:bg-dark-bg md:p-8 items-center justify-center">
      <div
        className="bg-light-bg-alt dark:bg-dark-bg-alt p-4
shadow-hard rounded-lg flex flex-col h-full w-full md:h-1/2 md:w-1/4 md:rounded-xl items-center justify-between gap-2 md:min-h-[500px]"
      >
        <div className="flex flex-col items-center">
          <GiDiceTwentyFacesTwenty className="dark:text-white text-8xl mb-4" />
          <h1 className="dark:text-white font-bold text-3xl text-center">
            nat 20
          </h1>
          <h1 className="dark:text-white font-bold text-xl text-center opacity-40">
            Let's get it going. Sign in below.
          </h1>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <input
            name="email"
            value={email}
            type="email"
            onChange={handleChangeEmail}
            placeholder="Email"
            className="py-2 px-4 border-2 border-white bg-transparent border-opacity-40 dark:text-white rounded-lg"
          />
          <input
            name="password"
            value={password}
            type="password"
            onChange={handleChangePassword}
            placeholder="Password"
            className="py-2 px-4 border-2 border-white bg-transparent border-opacity-40 dark:text-white rounded-lg"
          />
        </div>
        <Button onClick={handleLogin} className="w-full">
          Log in
        </Button>
      </div>
    </div>
  )
}
export default LoginPage
