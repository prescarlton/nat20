import NavItem from "./NavItem"
import { MdClose, MdMenu } from "react-icons/md"
import { useState } from "react"

const Navbar = () => {
  const [showMobileLinks, setShowMobileLinks] = useState(false)
  const toggleMobileLinks = () => setShowMobileLinks((prev) => !prev)
  const links = [
    { label: "Home", path: "/" },
    { label: "Inventory", path: "/inventory" },
    { label: "Notes", path: "/notes" },
    { label: "Messages", path: "/messages" },
  ]
  return (
    <div
      className={`md:h-[calc(100vh-2rem)] md:w-[15.625rem] rounded-xl
      m-4 shadow-hard
      bg-gradient-to-b from-[#42424a] to-[#191919]
      dark:bg-none dark:bg-dark-bg-alt 
      w-[calc(100vw-2rem)]
      transition-all 
      ${showMobileLinks ? "h-32" : "h-14"} overflow-hidden
  `}
    >
      <div className="flex items-center md:justify-center text-white p-4 md:pt-6 gap-4">
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
      </div>
      <div className="flex md:flex-col gap-1 p-4 transition-all">
        {links.map((link) => (
          <NavItem key={link.path} {...link} />
        ))}
      </div>
    </div>
  )
}
export default Navbar
