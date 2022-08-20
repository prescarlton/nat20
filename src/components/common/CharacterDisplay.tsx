import { useAppContext } from "../../contexts/App"

const CharacterDisplay = () => {
  const { character } = useAppContext()
  if (!character) return <div>No Character Selected.</div>
  return (
    <div className="flex gap-2">
      <h6 className="">{character.name}</h6>
      <div className="border-l-2 opacity-40"></div>
      <h6 className="">{character.class}</h6>
    </div>
  )
}
export default CharacterDisplay
