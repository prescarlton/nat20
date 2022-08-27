import { createContext, ReactNode, useContext, useState } from "react"

export enum NotificationType {
  Banner = "BANNER",
  Popup = "POPUP",
  Snackbar = "SNACKBAR",
}

export interface NotificationInterface {
  type: NotificationType
  persistent?: boolean
  message: string
}

interface NotificationContextInterface {
  openNotification: (notif: NotificationInterface) => void
}

const NotificationContext = createContext({} as NotificationContextInterface)
export default NotificationContext

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notificationMessage, setNotificationMessage] = useState("")
  const [notificationType, setNotificationType] = useState<NotificationType>()
  const openNotification = ({
    type,
    persistent = false,
    message,
  }: NotificationInterface) => {
    setNotificationMessage(message)
    setNotificationType(type)
  }

  return (
    <NotificationContext.Provider value={{ openNotification }}>
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotificationContext = () => {
  const notificationContext = useContext(NotificationContext)
  if (notificationContext === undefined)
    throw new Error(
      "useNotificationContext must be used within a NotificationProvider"
    )
  return notificationContext
}
