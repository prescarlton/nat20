import { User as UserAuth } from "firebase/auth"
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"
import { ApiReference } from "../api/SharedTypes"
import getUserData from "../data/getUserData"
import { firebaseAuth } from "../firebase"
import { User } from "../types/data/User"

interface AppContextInterface {
  // name: string
  // email: string
  // character: {
  //   name: string
  //   id: string
  // }
  userData: User | undefined
  userAuth: UserAuth | undefined
  character: ApiReference | undefined
  checkingStatus: boolean
}

const AppContext = createContext({} as AppContextInterface)
export default AppContext

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<User | undefined>(undefined)
  const [userAuth, setUserAuth] = useState<UserAuth | undefined>(undefined)
  const [character, setCharacter] = useState<ApiReference | undefined>(
    undefined
  )
  const [checkingStatus, setCheckingStatus] = useState(true)
  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        setUserAuth(user)
        getUserData(user.uid).then((res) => {
          const data = res.data() as User
          if (data) {
            setUserData(data)
            // once we add multiple characters this might change,
            // but for now, set the user's selected character manually
            if (data.characters) setCharacter(data.characters[0])
          }
          setCheckingStatus(false)
        })
      } else {
        setCheckingStatus(false)
      }
    })
  }, [])

  return (
    <AppContext.Provider
      value={{ userAuth, userData, character, checkingStatus }}
    >
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
