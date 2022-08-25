import { useQuery } from "react-query"
import { getCharacterClasses } from "../../../api/DNDService/ClassService"
import { ClassListQueryKey } from "../../../api/DNDService/constants"
import { ListResponse } from "../../../api/SharedTypes"

const useGetCharacterClasses = () =>
  useQuery<ListResponse>(ClassListQueryKey.all, () => getCharacterClasses())
export default useGetCharacterClasses
