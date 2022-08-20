import { InventoryItem as Item } from "../../types/InventoryItem"
import {
  GiArmorVest,
  GiAxeSword,
  GiPotionBall,
  GiSwapBag,
} from "react-icons/gi"

const InventoryItem = ({
  item,
  onClick,
}: {
  item: Item
  onClick: (item: Item) => void
}) => {
  const iconMap = {
    weapon: <GiAxeSword />,
    potion: <GiPotionBall />,
    gear: <GiSwapBag />,
    other: <GiSwapBag />,
    armor: <GiArmorVest />,
  }
  return (
    <div
      className="flex md:flex-col items-center md:justify-center p-4 
      bg-light-bg-alt dark:bg-dark-bg-alt 
    shadow-hard rounded-lg w-full md:w-[10rem] md:h-[10rem] gap-2
    relative overflow-hidden group cursor-pointer"
      onClick={() => onClick(item)}
    >
      {item.amt > 1 && (
        <div
          className="absolute md:bottom-0 right-0 m-2 bg-light-bg dark:bg-dark-bg 
      p-1 w-8 flex items-center justify-center rounded-md text-xl md:text-base"
        >
          {item.amt}
        </div>
      )}
      <h1 className="text-5xl">{iconMap[item.item_type]}</h1>
      <div className="flex flex-col md:items-center">
        <h3 className="text-lg text-center">{item.name}</h3>
        <h5 className="capitalize opacity-40">{item.item_type}</h5>
      </div>
    </div>
  )
}
export default InventoryItem
