import { FaMoon, FaSun } from "react-icons/fa"
import { MdSettings } from "react-icons/md"

const DarkModeSwitch = ({
  label,
  value,
  onChange,
}: {
  label?: string
  value: number
  onChange: () => void
}) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <h2>Light / Dark Preference</h2>
      <div className="flex items-center border-2 rounded-2xl">
        <div className="p-4 flex-1 flex items-center justify-center">
          <FaSun />
        </div>
        <div className="p-4 flex-1 flex items-center justify-center border-x-2">
          <MdSettings />
        </div>
        <div className="p-4 flex-1 flex items-center justify-center">
          <FaMoon />
        </div>
      </div>
    </div>
  )
}
export default DarkModeSwitch
