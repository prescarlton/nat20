import { ApiReference } from "../../api/SharedTypes"

export interface User {
  name: string
  email: string
  characters: ApiReference[]
}
