import { doc, setDoc } from "firebase/firestore"
import { firebaseDB } from "../firebase"
import { v4 as uuid } from "uuid"
import { ApiReference } from "../api/SharedTypes"

const createCharacter = (
  name: string,
  character_data: ApiReference,
  user_id: string
) => {
  const userRef = `/users/${user_id}`
  // create the character
  return setDoc(doc(firebaseDB, "characters", uuid()), {
    character_data,
    name,
    user: userRef,
  })
}
export default createCharacter
