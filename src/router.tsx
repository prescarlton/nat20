import { Route, Routes } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import DefaultPage from "./pages/DefaultPage"
import HomePage from "./pages/Home"
import InventoryPage from "./pages/Inventory"
import LoginPage from "./pages/Login"
import MessagesPage from "./pages/Messages"
import NotesPage from "./pages/Notes"
import UserSignupPage from "./pages/UserSignup"

const AppRouter = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route index element={<DefaultPage />} />
      <Route path="user-signup" element={<UserSignupPage />} />
      <Route element={<AppLayout />}>
        <Route path="home" element={<HomePage />} />
        <Route path="inventory" element={<InventoryPage />} />
        <Route path="notes" element={<NotesPage />} />
        <Route path="messages" element={<MessagesPage />} />
      </Route>
    </Routes>
  )
}
export default AppRouter
