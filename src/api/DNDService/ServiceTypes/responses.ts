import { ApiReference } from "../../SharedTypes"

export interface Cost {
  quantity: number
  unit: string
}

export interface EquipmentCategory {
  index: string
  name: string
  url: string
  weight: number
  cost: Cost
}
export interface Equipment {
  index: string
  name: string
  url: string
  desc: string[]
  equipment_category: EquipmentCategory
}

export interface Weapon extends Equipment {
  weapon_category: string
  weapon_range: string
  category_range: string
  range: {
    normal: number
    long: number
  }
  damage: {
    damage_dice: string
    damage_type: ApiReference
  }
  two_handed_damage: {}
  properties: ApiReference[]
}

export interface Armor extends Equipment {}
export interface Gear extends Equipment {}
