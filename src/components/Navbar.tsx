import NavItem from "./NavItem"
import { MdClose, MdMenu } from "react-icons/md"
import { useState } from "react"
import { signOut } from "firebase/auth"
import { firebaseAuth } from "../firebase"
import Button from "./common/Button"
import { useNavigate } from "react-router-dom"
import CharacterDisplay from "./common/CharacterDisplay"

const Navbar = () => {
  const [showMobileLinks, setShowMobileLinks] = useState(false)
  const toggleMobileLinks = () => setShowMobileLinks((prev) => !prev)
  const navigate = useNavigate()
  const links = [
    { label: "Home", path: "/home" },
    { label: "Inventory", path: "/inventory" },
    { label: "Notes", path: "/notes" },
    { label: "Messages", path: "/messages" },
  ]
  const handleLogOut = () => {
    signOut(firebaseAuth).then(() => {
      navigate("/login", { replace: true })
    })
  }
  return (
    <div
      className={`md:h-[calc(100vh-2rem)] md:w-[15.625rem] rounded-xl
      relative
      m-4 shadow-hard
      bg-gradient-to-b from-[#42424a] to-[#191919]
      dark:bg-none dark:bg-dark-bg-alt 
      w-[calc(100vw-2rem)]
      transition-all 
      ${showMobileLinks ? "h-32" : "h-14"} overflow-hidden
  `}
    >
      <div
        className="flex items-center justify-between md:justify-center
      text-white p-4 md:pt-6 gap-4"
      >
        <div className="flex items-center gap-4  md:flex-col md:gap-2">
          {showMobileLinks ? (
            <MdClose
              className={`text-2xl md:hidden`}
              onClick={toggleMobileLinks}
            />
          ) : (
            <MdMenu
              className={`text-2xl md:hidden`}
              onClick={toggleMobileLinks}
            />
          )}
          <h6 className="font-bold">nat20</h6>
          <CharacterDisplay />
        </div>
        <Button
          variant="text"
          onClick={handleLogOut}
          className="px-0 py-0 md:hidden"
        >
          Logout
        </Button>
      </div>
      <div className="flex md:flex-col gap-1 p-4 transition-all">
        {links.map((link) => (
          <NavItem key={link.path} {...link} />
        ))}
      </div>
      <div className="hidden absolute md:block bottom-0 p-4">
        <Button variant="text" onClick={handleLogOut}>
          Logout
        </Button>
      </div>
    </div>
  )
}
export default Navbar
