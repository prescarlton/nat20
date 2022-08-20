import { CharacterBlurb } from "./Character"

export interface User {
  name: string
  email: string
  characters: CharacterBlurb[]
}
