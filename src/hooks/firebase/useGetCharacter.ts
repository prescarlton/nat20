import { collection } from "firebase/firestore"
import { firebaseDB } from "../../firebase"

const useGetCharacter = (character_id: string) => {
  const characterCollection = collection(firebaseDB, "characters", character_id)
  return characterCollection
}
export default useGetCharacter
