import { MdClose, MdMinimize } from "react-icons/md"
import { FaMinus, FaPlus } from "react-icons/fa"
import { InventoryItem } from "../../types/InventoryItem"
import Button from "../common/Button"
import IconButton from "../common/IconButton"
import Modal, { ModalProps } from "../common/Modal"
import ModalTitle from "../common/ModalTitle"

interface ItemModalProps extends ModalProps {
  item?: InventoryItem
}

const ItemModal = ({ isOpen, onClose, item }: ItemModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div>
        <ModalTitle>{item?.name}</ModalTitle>
        <h2 className="text-lg opacity-40">Quantity: {item?.amt}</h2>
        <p className="mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
          praesentium aut impedit, hic fugit laboriosam consectetur accusamus
          inventore esse ipsam voluptas doloribus quas quae maxime dolorum
          consequuntur unde, maiores mollitia.
        </p>
      </div>
      <div className="w-full flex justify-between">
        <div className="flex gap-2 items-center">
          <IconButton>
            <FaMinus />
          </IconButton>
          <div>{item?.amt}</div>
          <IconButton>
            <FaPlus />
          </IconButton>
        </div>
        {/* <Button>Use</Button> */}
        <Button onClick={onClose}>Update</Button>
      </div>
    </Modal>
  )
}
export default ItemModal
