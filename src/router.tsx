import { Route, Routes } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import HomePage from "./pages/Home"

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  )
}
export default AppRouter
