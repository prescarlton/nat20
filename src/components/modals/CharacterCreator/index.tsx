import Modal, { ModalProps } from "../../common/Modal"
import ModalTitle from "../../common/ModalTitle"

const CharacterCreatorModal = ({ isOpen, onClose }: ModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} showClose={false}>
      <div>
        <ModalTitle>Character Creator</ModalTitle>
        <h2 className="mt-2 dark:text-white">
          You don't have any characters yet! Let's create your first one to get
          you started.
        </h2>
      </div>
    </Modal>
  )
}
export default CharacterCreatorModal
