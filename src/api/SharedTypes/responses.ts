export interface ApiReference {
  index: string
  name: string
  url: string
}

export interface ListResponse {
  count: number
  results: ApiReference[]
}
