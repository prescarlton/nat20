import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"
import getUserData from "../data/getUserData"
import { firebaseAuth } from "../firebase"
import { CharacterBlurb } from "../types/data/Character"
import { User } from "../types/data/User"

interface AppContextInterface {
  // name: string
  // email: string
  // character: {
  //   name: string
  //   id: string
  // }
  user: User | null
  character: CharacterBlurb | null
}

const AppContext = createContext({} as AppContextInterface)
export default AppContext

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [character, setCharacter] = useState<CharacterBlurb | null>(null)
  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        getUserData(user.uid).then((res) => {
          const data = res.data() as User
          if (data) {
            setUser(data)
            // once we add multiple characters this might change,
            // but for now, set the user's selected character manually
            setCharacter(data.characters[0])
          }
          console.log(data)
        })
      }
      // fetch user data
    })
  }, [])

  return (
    <AppContext.Provider value={{ user, character }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const appContext = useContext(AppContext)
  if (appContext === undefined) {
    throw new Error("useAppContext must be used within an AppProvider")
  }
  return appContext
}
