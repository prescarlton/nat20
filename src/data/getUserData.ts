import { doc, getDoc } from "firebase/firestore"
import { firebaseDB } from "../firebase"

const getUserData = (uid: string) => {
  // doc() returns a document reference, use that to get an actual doc
  const userDocRef = doc(firebaseDB, "users", uid)
  return getDoc(userDocRef)
}
export default getUserData
