import { Route, Routes } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import HomePage from "./pages/Home"
import InventoryPage from "./pages/Inventory"
import MessagesPage from "./pages/Messages"
import NotesPage from "./pages/Notes"

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="inventory" element={<InventoryPage />} />
        <Route path="notes" element={<NotesPage />} />
        <Route path="messages" element={<MessagesPage />} />
      </Route>
    </Routes>
  )
}
export default AppRouter
