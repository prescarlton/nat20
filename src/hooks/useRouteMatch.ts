import { matchPath, useLocation } from "react-router-dom"

const useRouteMatch = (basePath = "") => {
  const { pathname } = useLocation()
  return (path: string) => {
    return matchPath({ path: `${basePath}${path}` }, pathname) != null
  }
}
export default useRouteMatch
