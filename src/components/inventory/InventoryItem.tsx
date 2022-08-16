import { InventoryItem as Item } from "../../types/InventoryItem"
import {
  GiArmorVest,
  GiAxeSword,
  GiPotionBall,
  GiSwapBag,
} from "react-icons/gi"

const InventoryItem = ({ name, amt, item_type }: Item) => {
  const iconMap = {
    weapon: <GiAxeSword />,
    potion: <GiPotionBall />,
    gear: <GiSwapBag />,
    other: <GiSwapBag />,
    armor: <GiArmorVest />,
  }
  return (
    <div
      className="flex flex-col items-center p-4 
      bg-light-bg-alt dark:bg-dark-bg-alt 
    shadow-hard rounded-lg w-full md:w-[10rem] md:h-[10rem]
    relative"
    >
      {amt > 1 && (
        <div
          className="absolute top-0 right-0 m-2 bg-light dark:bg-dark-bg 
      p-1 w-8 flex items-center justify-center rounded-md"
        >
          {amt}
        </div>
      )}
      <h1 className="text-6xl">{iconMap[item_type]}</h1>
      <h3 className="text-lg text-center">{name}</h3>
      <h5 className="capitalize opacity-40">{item_type}</h5>
    </div>
  )
}
export default InventoryItem
