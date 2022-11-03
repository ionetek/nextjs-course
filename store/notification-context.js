import { createContext, useState } from 'react'

const NotificationContext = createContext({
  notification: null, // { title, message, status }
  active: false,
  showNotification: function (notificationData) {},
  hideNotification: function () {},
})

export function NotificationContextProvider(props) {
  const [activeNotification, setActiveNotification] = useState({
    title: '',
    active: false,
    message: '',
  })

  function showNotificationHandler(notificationData) {
    setActiveNotification({
      title: notificationData.title,
      active: true,
      message: notificationData.message,
    })
  }

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  }

  function hideNotificationHandler() {
    setActiveNotification((prev) => {
      return { ...prev, active: false }
    })
  }

  return (
    <NotificationContext.Provider value={context}>{props.children}</NotificationContext.Provider>
  )
}

export default NotificationContext
