import { MdClose, MdMinimize } from "react-icons/md"
import { FaMinus, FaPlus } from "react-icons/fa"
import { InventoryItem } from "../../types/InventoryItem"
import Button from "../common/Button"
import IconButton from "../common/IconButton"
import Modal, { ModalProps } from "../common/Modal"
import ModalTitle from "../common/ModalTitle"
import useGetEquipmentIndex from "../../hooks/api/equipment/useGetEquipmentIndex"
import { slugify } from "../../util"
import WeaponInfo from "./ItemInfo/WeaponInfo"
import { Weapon } from "../../api/DNDService/ServiceTypes"
import { useEffect } from "react"

interface ItemModalProps extends ModalProps {
  item: InventoryItem
}

const ItemModal = ({ isOpen, onClose, item }: ItemModalProps) => {
  // if the item doesn't have an index attached, slugify its name
  const index = item.index || slugify(item.name)
  const { data: equipmentData, isLoading: isEquipmentDataLoading } =
    useGetEquipmentIndex(index)
  useEffect(() => {
    console.log(equipmentData)
  }, [equipmentData])

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col gap-4">
        <div>
          <ModalTitle>{item.name}</ModalTitle>
          <h2 className="text-lg opacity-40">Quantity: {item.amt}</h2>
        </div>

        {equipmentData?.desc && <p>{equipmentData.desc}</p>}
        {equipmentData?.equipment_category.index == "weapon" && (
          <WeaponInfo weapon={equipmentData as Weapon} />
        )}
      </div>
      <div className="w-full flex justify-between">
        <div className="flex gap-2 items-center">
          <IconButton>
            <FaMinus />
          </IconButton>
          <div>{item.amt}</div>
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
