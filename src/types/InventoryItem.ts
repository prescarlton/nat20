export enum Item {
  Weapon = "weapon",
  Potion = "potion",
  Gear = "gear",
  Armor = "armor",
  Other = "other",
}

export interface InventoryItem {
  id: string
  index?: string
  name: string
  amt: number
  item_type: Item
}
