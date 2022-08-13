import { ReactNode } from "react"
import { NavLink } from "react-router-dom"
import useRouteMatch from "../hooks/useRouteMatch"

const NavItem = ({ label, path }: { label: string; path: string }) => {
  const routeMatch = useRouteMatch()
  return (
    <NavLink
      to={path}
      className={`flex items-center p-2 rounded-md text-white transition-all cursor-pointer gap-2
      ${
        routeMatch(path)
          ? "bg-gradient-to-r from-sky-400 to-blue-500 shadow-hard"
          : "hover:bg-opacity-20 hover:bg-white"
      }`}
    >
      <h6>{label}</h6>
    </NavLink>
  )
}
export default NavItem
