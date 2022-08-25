import { CreateDNDService } from "../.."

const ClassService = CreateDNDService({
  baseURL: "/classes",
})
export default ClassService

export const getCharacterClasses = () =>
  ClassService.get("/").then((res) => res.data)

export const getCharacterClassIndex = (index: string) =>
  ClassService.get(`/${index}`).then((res) => res.data)
