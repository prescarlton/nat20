import { useState } from "react"
import { FaMoneyBill, FaPlus, FaPlusCircle } from "react-icons/fa"
import { GiGoldBar, GiGoldNuggets, GiMoneyStack } from "react-icons/gi"
import Button from "../components/common/Button"
import PageTitle from "../components/common/PageTitle"
import CurrencyControl from "../components/inventory/CurrencyControl"
import InventoryItem from "../components/inventory/InventoryItem"
import ItemModal from "../components/inventory/ItemModal"
import NewItemModal from "../components/inventory/NewItemModal"
import Page from "../components/Page"
import { fakeItems } from "../fakeData/inventory"
import { InventoryItem as Item } from "../types/InventoryItem"

const InventoryPage = () => {
  const [isItemModalOpen, setIsItemModalOpen] = useState(false)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<Item | undefined>(undefined)

  const handleCloseItemModal = () => {
    setIsItemModalOpen(false)
  }
  const handleOpenItemModal = (item: Item) => {
    setSelectedItem(item)
    setIsItemModalOpen(true)
  }
  const handleOpenAddModal = () => setIsAddModalOpen(true)
  const handleCloseAddModal = () => setIsAddModalOpen(false)
  return (
    <Page>
      <PageTitle title="Inventory" />

      <div className="flex flex-col items-start gap-2">
        <div className="flex items-center gap-1">
          <h1 className="text-xl">Items</h1>
          <Button variant="text" onClick={handleOpenAddModal} size="small">
            <FaPlus />
            Add Item
          </Button>
        </div>
        <div className="flex gap-4 flex-wrap">
          {fakeItems.map((item) => (
            <InventoryItem
              key={item.id}
              item={item}
              onClick={handleOpenItemModal}
            />
          ))}
        </div>
      </div>
      {selectedItem && (
        <ItemModal
          isOpen={isItemModalOpen}
          onClose={handleCloseItemModal}
          item={selectedItem}
        />
      )}
      <NewItemModal isOpen={isAddModalOpen} onClose={handleCloseAddModal} />
    </Page>
  )
}
export default InventoryPage
