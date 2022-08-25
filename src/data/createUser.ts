import { doc, setDoc } from "firebase/firestore"
import { firebaseDB } from "../firebase"

const createUser = ({
  name,
  email,
  uid,
}: {
  name: string
  email: string
  uid: string
}) => {
  // create the user
  return setDoc(doc(firebaseDB, "users", uid), {
    name,
    email,
  })
}
export default createUser
