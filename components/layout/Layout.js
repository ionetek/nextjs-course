import Header from './Header'
import Notification from '../ui/notification/Notification'
import { useContext } from 'react'
import NotificationContext from '../../store/notification-context'

function Layout(props) {
  const notificationCtx = useContext(NotificationContext)

  const activeNotification = notificationCtx.notification
  const hideNotification = notificationCtx.hideNotification
  const active = notificationCtx.active

  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Notification notification={activeNotification} hideNotification={hideNotification} />
    </>
  )
}

export default Layout
