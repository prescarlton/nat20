import { Weapon } from "../../../api/DNDService/EquipmentService/ServiceTypes"
import ItemStat from "./ItemStat"

const WeaponInfo = ({ weapon }: { weapon: Weapon }) => {
  return (
    <div className="flex flex-col gap-2">
      <ItemStat label="Weapon Type" stat={weapon.category_range} />
      <ItemStat label="Damage" stat={weapon.damage.damage_dice} />
      <ItemStat label="Damage Type" stat={weapon.damage.damage_type.name} />
    </div>
  )
}
export default WeaponInfo
