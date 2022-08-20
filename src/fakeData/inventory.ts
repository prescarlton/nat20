import { v4 as uuid } from "uuid"
import { InventoryItem, Item } from "../types/InventoryItem"

export const fakeItems: InventoryItem[] = [
  {
    id: uuid(),
    name: "Arcane Focus",
    amt: 1,
    item_type: Item.Gear,
    index: "arcane-focus",
  },
  {
    id: uuid(),
    name: "Bottle of Ink",
    amt: 1,
    item_type: Item.Other,
  },
  {
    id: uuid(),
    name: "Ink pen",
    amt: 1,
    item_type: Item.Other,
  },
  {
    id: uuid(),
    name: "Sheet of paper",
    amt: 10,
    item_type: Item.Other,
  },
  {
    id: uuid(),
    name: "Quarterstaff",
    amt: 1,
    item_type: Item.Weapon,
  },
  {
    id: uuid(),
    name: "Tiny bag of sand",
    amt: 5,
    item_type: Item.Other,
  },
  {
    id: uuid(),
    name: "Shard of Glass",
    amt: 9,
    item_type: Item.Other,
  },
]
