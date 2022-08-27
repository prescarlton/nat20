import { createContext, ReactNode, useEffect, useState } from "react"
import CharacterCreatorModal from "../components/modals/CharacterCreator"
import { useAppContext } from "./App"

interface ModalsContextInterface {
  openCreateCharacterModal: () => void
}

const ModalsContext = createContext({} as ModalsContextInterface)
export default ModalsContext

export const ModalsProvider = ({ children }: { children: ReactNode }) => {
  const [showCharactersModal, setShowCharactersModal] = useState(false)
  const [persistentModal, setPersistentModal] = useState(false)
  const openCreateCharacterModal = () => {
    setShowCharactersModal(true)
  }
  const closeCreateCharacterModal = () => {
    if (!persistentModal) setShowCharactersModal(false)
  }

  // get all the user's personal information like their
  // name and characters
  const { userData, userAuth, checkingStatus } = useAppContext()
  // whenever the user is signed in, check if they have characters.
  // if they don't, AGRESSIVELY FORCE THEM TO MAKE ONE!!
  useEffect(() => {
    // if this little weasel is logged in and they don't have
    // any characters (smh), open the modal persistently
    if (!checkingStatus && !userData?.characters) {
      setShowCharactersModal(true)
      setPersistentModal(true)
    }
  }, [checkingStatus])
  return (
    <ModalsContext.Provider value={{ openCreateCharacterModal }}>
      {children}
      <CharacterCreatorModal
        isOpen={showCharactersModal}
        onClose={closeCreateCharacterModal}
      />
    </ModalsContext.Provider>
  )
}
