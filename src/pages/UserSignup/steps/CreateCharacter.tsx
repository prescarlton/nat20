import { ChangeEvent, useState } from "react"
import Button from "../../../components/common/Button"
import FormPage from "../../../components/common/FormPage"
import { useAppContext } from "../../../contexts/App"
import createCharacter from "../../../data/createCharacter"
import useGetCharacterClasses from "../../../hooks/api/classes/useGetCharacterClasses"
import ProtectedRoute from "../../ProtectedRoute"

const CreateCharacterPage = ({ nextStep }: { nextStep: () => void }) => {
  const [characterName, setCharacterName] = useState("")
  const [characterClass, setCharacterClass] = useState("")
  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) =>
    setCharacterName(e.currentTarget.value)

  const handleCharacterClassChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setCharacterClass(e.currentTarget.value)

  const { data: characterClasses } = useGetCharacterClasses()
  const { userData, userAuth } = useAppContext()

  const handleSubmit = () => {
    const classIndex = characterClass.toLowerCase()
    console.log("creating:", {
      index: classIndex,
      name: characterClass,
      url: `/api/classes/${classIndex}`,
    })
    if (userAuth)
      createCharacter(
        characterName,
        {
          index: classIndex,
          name: characterClass,
          url: `/api/classes/${classIndex}`,
        },
        userAuth.uid
      )
    else console.log("no user auth")
  }

  return (
    <ProtectedRoute>
      <FormPage
        title="We saved the best for last."
        subtitle="Looks like you don't have any characters yet. Let's create your first!"
      >
        <div className="flex flex-col gap-4 w-full">
          <input
            name="name"
            value={characterName}
            onChange={handleChangeName}
            placeholder="Name"
            className="py-2 px-4 border-2 dark:border-white bg-transparent border-opacity-40 
        dark:text-white rounded-lg"
          />
          <select
            name="characterClass"
            value={characterClass}
            onChange={handleCharacterClassChange}
            placeholder="Class"
            className="py-2 px-4 border-2 dark:border-white bg-transparent border-opacity-40 
        dark:text-white rounded-lg"
          >
            {characterClasses &&
              characterClasses.results.map((res) => (
                <option key={res.index} value={res.index}>
                  {res.name}
                </option>
              ))}
            <option></option>
          </select>
        </div>
        <Button onClick={handleSubmit} className="w-full">
          Create Character
        </Button>
      </FormPage>
    </ProtectedRoute>
  )
}
export default CreateCharacterPage
