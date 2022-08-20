import { useQuery } from "react-query"
import { getEquipmentIndex } from "../../../api/DNDService"
import { EquipmentIndexQueryKey } from "../../../api/DNDService/constants"
import { Equipment } from "../../../api/DNDService/ServiceTypes"

const useGetEquipmentIndex = (index: string) =>
  useQuery<Equipment>(EquipmentIndexQueryKey.detail(index), () =>
    getEquipmentIndex(index)
  )

export default useGetEquipmentIndex
