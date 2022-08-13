import NavItem from "./NavItem"

const Navbar = () => {
  const links = [
    { label: "Home", path: "/" },
    { label: "Inventory", path: "/inventory" },
    { label: "Notes", path: "/notes" },
    { label: "Messages", path: "/messages" },
  ]
  return (
    <div
      className="h-[calc(100vh-2rem)] w-[15.625rem] rounded-xl
      m-4 shadow-hard
      bg-gradient-to-b from-[#42424a] to-[#191919]
      dark:bg-none dark:bg-dark-bg-alt"
    >
      <div className="flex items-center justify-center text-white p-4, pt-6">
        <h6 className="font-bold">nat20</h6>
      </div>
      <div className="flex flex-col gap-1 p-4">
        {links.map((link) => (
          <NavItem key={link.path} {...link} />
        ))}
      </div>
    </div>
  )
}
export default Navbar
