import { CreateDNDService } from "../.."

const EquipmentService = CreateDNDService({ baseURL: "/equipment" })
export default EquipmentService

export const getEquipmentIndex = (index: string) =>
  EquipmentService.get(`/${index}`).then((res) => res.data)
