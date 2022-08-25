import { ChangeEvent, useState } from "react"
import Button from "../../../components/common/Button"
import FormPage from "../../../components/common/FormPage"
import Input from "../../../components/common/Input"
import { useAppContext } from "../../../contexts/App"
import createUser from "../../../data/createUser"
import ProtectedRoute from "../../ProtectedRoute"

const CreateUserPage = ({ nextStep }: { nextStep: () => void }) => {
  const [name, setName] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }
  const { userAuth } = useAppContext()

  const handleSubmit = () => {
    if (name)
      if (userAuth)
        createUser({
          name,
          email: userAuth.email || "",
          uid: userAuth.uid,
        }).then(() => {
          nextStep()
        })
  }

  return (
    <ProtectedRoute>
      <FormPage
        title="Almost done, I promise."
        subtitle="Just need a few things about you to get your profile going."
      >
        <div className="flex flex-col justify-between flex-1 w-full">
          <div>
            <Input
              value={name}
              onChange={handleChangeName}
              placeholder="Name"
              label="Name"
            />
            <h2 className="text-red-500">{errorMessage}</h2>
          </div>
          <Button onClick={handleSubmit}>Continue</Button>
        </div>
      </FormPage>
    </ProtectedRoute>
  )
}
export default CreateUserPage
