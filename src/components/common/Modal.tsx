import { ReactNode } from "react"
import { MdClose } from "react-icons/md"

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children?: ReactNode
}
const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <div
      className={`fixed ${
        isOpen ? "flex" : "hidden"
      } top-0 bottom-0 left-0 right-0 items-center justify-center backdrop-blur-md bg-modal-bg p-4`}
      onClick={onClose}
    >
      <div
        className="bg-light-bg dark:bg-dark-bg p-4 
      rounded-lg w-full h-full md:h-2/5 md:w-2/5 relative
      flex flex-col justify-between overflow-auto
      "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 right-0 m-4">
          <MdClose className="text-xl cursor-pointer" onClick={onClose} />
        </div>
        {children}
      </div>
    </div>
  )
}
export default Modal
