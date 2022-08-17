import Modal, { ModalProps } from "../common/Modal"
import ModalTitle from "../common/ModalTitle"

const NewItemModal = ({ isOpen, onClose }: ModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalTitle>New Item</ModalTitle>
    </Modal>
  )
}
export default NewItemModal
