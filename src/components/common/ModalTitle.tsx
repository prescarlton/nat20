import { ReactNode } from "react"

const ModalTitle = ({ children }: { children: ReactNode }) => {
  return <h1 className="text-3xl font-bold dark:text-white">{children}</h1>
}
export default ModalTitle
